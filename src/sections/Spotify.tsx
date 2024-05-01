import { useTheme } from "../components/ThemeContext";
import { client } from "../utils/utils";
import { useEffect, useState } from "react";
import { CurrentTrack, RecentlyPlayed, SpotifyData, SpotifyProfile, TopTracks, Track } from "../utils/types";
import { AxiosResponse, HttpStatusCode } from "axios";
import SpotifyTopTrackCard from "../components/SpotifyTopTrackCard";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from "swiper/modules";
import SpotifyCurrent from "../components/SpotifyCurrent";

const Spotify = () => {
  const {isDarkMode} = useTheme();
  const [spotifyData, setSpotifyData] = useState<SpotifyData>({
    current: "",
    profile: "",
    topTracks: "",
    recentlyPlayed: ""
  });

  const fetchProfile = async (): Promise<void> => {
    try {
      const cachedProfile = localStorage.getItem("profile");
      if (!cachedProfile) {
        const response: AxiosResponse<SpotifyProfile> = await client.get("/spotify/profile").catch((error) => {
          setSpotifyData((curData)=>{
              return {
                  ...curData,
                  profile: "There was an issue collecting my Spotify information. Feel free to message me to let me know and I'll see if I can fix it."
              }
          })
          return error;
        });

        if(response.status != HttpStatusCode.Ok) {
          return;
        }

        const expiration = new Date().getTime() + (1000 * 60 * 60 * 24 * 7); // 7 days of cache
        localStorage.setItem("profile", JSON.stringify({ ...response.data, expiresAt: expiration }));
        setSpotifyData((old) => ({
          ...old,
          profile: {...response.data, expiresAt: expiration}
        }));
      } else {
        const profileData: SpotifyProfile = JSON.parse(cachedProfile);
        const expiresAt: number = profileData.expiresAt || 0;

        // Check if the cached profile data is expired
        if (expiresAt > new Date().getTime()) {
          setSpotifyData((old) => ({
            ...old,
            profile: profileData
          }));
        } else {
          // If expired, fetch new profile data
          const response: AxiosResponse<SpotifyProfile> = await client.get("/spotify/profile").catch((error) => {
            setSpotifyData((curData)=>{
              return {
                ...curData,
                profile: "There was an issue collecting my Spotify information. Feel free to message me to let me know and I'll see if I can fix it."
              }
            })
            return error;
          });

          if(response.status != HttpStatusCode.Ok) {
            return;
          }

          const newExpiration = new Date().getTime() + (1000 * 60 * 60 * 24 * 7); // 7 days of cache
          localStorage.setItem("profile", JSON.stringify({ ...response.data, expiresAt: newExpiration }));
          setSpotifyData((old) => ({
            ...old,
            profile: {...response.data, expiresAt: newExpiration}
          }));
        }
      }
    } catch (error) {
      console.error('Error fetching Spotify profile:', error);
    }
  };

  const fetchTopTracks = async (): Promise<void> => {
    try {
      const cachedTracks = localStorage.getItem("topTracks");
      if (!cachedTracks) {
        const response: AxiosResponse<{items: Track[]}> = await client.get("/spotify/top-tracks").catch((error) => {
          setSpotifyData((curData)=>{
            return {
              ...curData,
              topTracks: "There was an issue collecting my top tracks from Spotify. Feel free to message me to let me know and I'll see if I can fix it."
            }
          })
          return error;
        });

        if(response.status != HttpStatusCode.Ok) {
          return;
        }

        const expiration = new Date().getTime() + (1000 * 60 * 60 * 24 * 14); // 2 weeks of cache
        localStorage.setItem("topTracks", JSON.stringify({ ...response.data, expiresAt: expiration }));
        setSpotifyData((old) => ({
          ...old,
          topTracks: {items: response.data.items, expiresAt: expiration}
        }));
      } else {
        const topTrackData: TopTracks = JSON.parse(cachedTracks);
        const expiresAt: number = topTrackData.expiresAt || 0;

        // Check if the cached top track data is expired
        if (expiresAt > new Date().getTime()) {
          setSpotifyData((old) => ({
            ...old,
            topTracks: {items: topTrackData.items, expiresAt: topTrackData.expiresAt}
          }));
        } else {
          // If expired, fetch new profile data
          const response: AxiosResponse<{items: Track[]}> = await client.get("/spotify/top-tracks").catch((error) => {
            setSpotifyData((curData)=>{
              return {
                ...curData,
                topTracks: "There was an issue collecting my top tracks from Spotify. Feel free to message me to let me know and I'll see if I can fix it."
              }
            })
            return error;
          });

          if(response.status != HttpStatusCode.Ok) {
            return;
          }

          const newExpiration = new Date().getTime() + (1000 * 60 * 60 * 24 * 14); // 2 weeks of cache
          localStorage.setItem("topTracks", JSON.stringify({ ...response.data, expiresAt: newExpiration }));
          setSpotifyData((old) => ({
            ...old,
            topTracks: {items: response.data.items, expiresAt: newExpiration}
          }));
        }
      }
    } catch (error) {
      console.error('Error fetching Spotify top tracks:', error);
    }
  };

  const fetchCurrentSong = async (): Promise<void> => {
    try {
      const cachedCurrentSong = localStorage.getItem("currentSong");
      if (!cachedCurrentSong) {
        const response: AxiosResponse<CurrentTrack> = await client.get("/spotify/currently-playing").catch((error) => {
          setSpotifyData((curData)=>{
            return {
              ...curData,
              current: "There was an issue collecting my currently playing song from Spotify. Feel free to message me to let me know and I'll see if I can fix it."
            }
          });
          
          return error;
        });

        if(response.status != 200) return;
        if(typeof response.data == "string") {
          // @ts-expect-error should never be type string unless odd case
          const msg = JSON.parse(response.data.replace("null",""));
          setSpotifyData((curData) => {
            return {
              ...curData,
              current: msg.message
            }
          });
          return;
        }

        const expiration = new Date().getTime() + (1000 * 60 * 5); // 5 min of cache
        localStorage.setItem("currentSong", JSON.stringify({ ...response.data, expiresAt: expiration }));
        setSpotifyData((old) => ({
          ...old,
          current: {...response.data, expiresAt: expiration}
        }));
      } else {
        const currentSongData: CurrentTrack = JSON.parse(cachedCurrentSong);
        const expiresAt: number = currentSongData.expiresAt || 0;

        // Check if the cached top track data is expired
        if (expiresAt > new Date().getTime()) {
          setSpotifyData((old) => ({
            ...old,
            current: currentSongData
          }));
        } else {
          // If expired, fetch new profile data
          const response: AxiosResponse<CurrentTrack> = await client.get("/spotify/currently-playing").catch((error) => {
            setSpotifyData((curData)=>{
              return {
                ...curData,
                current: "There was an issue collecting my currently playing song from Spotify. Feel free to message me to let me know and I'll see if I can fix it."
              }
            })
            return error;
          });
          
          if(response.status != 200) return;
          if(typeof response.data == "string") {
            // @ts-expect-error should never be type string unless odd case
            const msg = JSON.parse(response.data.replace("null",""));
            setSpotifyData((curData) => {
              return {
                ...curData,
                current: msg.message
              }
            });
            return;
          }
          const newExpiration = new Date().getTime() + (1000 * 60 * 5); // 5 min of cache
          localStorage.setItem("currentSong", JSON.stringify({ ...response.data, expiresAt: newExpiration }));
          setSpotifyData((old) => ({
            ...old,
            current: {...response.data, expiresAt: newExpiration}
          }));
        }
      }
    } catch (error) {
      console.error('Error fetching current song on Spotify:', error);
    }
  };

  const fetchRecentSong = async (): Promise<void> => {
    try {
      const cachedRecentSong = localStorage.getItem("recentSong");
      if (!cachedRecentSong) {
        const response: AxiosResponse<RecentlyPlayed> = await client.get("/spotify/recently-played").catch((error) => {
          setSpotifyData((curData)=>{
            return {
              ...curData,
              recentlyPlayed: "There was an issue collecting my recently played song from Spotify. Feel free to message me to let me know and I'll see if I can fix it."
            }
          });
          
          return error;
        });

        if(response.status != 200) return;
        if(typeof response.data == "string") {
          // @ts-expect-error should never be type string unless odd case
          const msg = JSON.parse(response.data.replace("null",""));
          setSpotifyData((curData) => {
            return {
              ...curData,
              recentlyPlayed: msg.message
            }
          });
          return;
        }

        const expiration = new Date().getTime() + (1000 * 60 * 5); // 5 min of cache
        localStorage.setItem("recentSong", JSON.stringify({ ...response.data, expiresAt: expiration }));
        setSpotifyData((old) => ({
          ...old,
          recentlyPlayed: {...response.data, expiresAt: expiration}
        }));
      } else {
        const recentSongData: RecentlyPlayed = JSON.parse(cachedRecentSong);
        const expiresAt: number = recentSongData.expiresAt || 0;

        // Check if the cached top track data is expired
        if (expiresAt > new Date().getTime()) {
          setSpotifyData((old) => ({
            ...old,
            recentlyPlayed: recentSongData
          }));
        } else {
          // If expired, fetch new profile data
          const response: AxiosResponse<RecentlyPlayed> = await client.get("/spotify/recently-played").catch((error) => {
            setSpotifyData((curData)=>{
              return {
                ...curData,
                recentlyPlayed: "There was an issue collecting my recently played song from Spotify. Feel free to message me to let me know and I'll see if I can fix it."
              }
            })
            return error;
          });
          
          if(response.status != 200) return;
          if(typeof response.data == "string") {
            // @ts-expect-error should never be type string unless odd case
            const msg = JSON.parse(response.data.replace("null",""));
            setSpotifyData((curData) => {
              return {
                ...curData,
                recentlyPlayed: msg.message
              }
            });
            return;
          }
          const newExpiration = new Date().getTime() + (1000 * 60 * 5); // 5 min of cache
          localStorage.setItem("recentSong", JSON.stringify({ ...response.data, expiresAt: newExpiration }));
          setSpotifyData((old) => ({
            ...old,
            recentlyPlayed: {...response.data, expiresAt: newExpiration}
          }));
        }
      }
    } catch (error) {
      console.error('Error fetching recently played song on Spotify:', error);
    }
  }

  useEffect(() => {
    fetchProfile();
    fetchTopTracks();
    fetchCurrentSong();
  }, []);

  useEffect(() => {
    if(typeof spotifyData.current == "string" && spotifyData.current.length > 0) {
      // error set, fetch recentlyPlayed
      fetchRecentSong();
    }
  },[spotifyData.current])
  
  if(typeof spotifyData.current == "string" && typeof spotifyData.profile == "string" && typeof spotifyData.topTracks == "string" && typeof spotifyData.recentlyPlayed == "string") {
    return (
      <div id="spotify" className={`section ${isDarkMode ? 'dark' : ''} scroll-mt-[90px]`}>
        <div className="bg-lightBG2 dark:bg-darkBG2 flex flex-col justify-center py-[24px] text-darkText">
          <p className="self-center text-lightText dark:text-darkText text-[24px] mb-[24px] font-bold">My Live Spotify Breakdown</p>
          <p className="self-center text-lightText dark:text-darkText text-[20px]">There was an issue connecting to my API. No issue was retrieved. Feel free to message me so that I can figure out what is going wrong and to see if I can find how to fix it.</p>
        </div>
      </div>
    )
  }
  
  return (
    <div id="spotify" className={`section ${isDarkMode ? 'dark' : ''} scroll-mt-[90px]`}>
      <div className="bg-lightBG2 dark:bg-darkBG2 flex flex-col justify-center py-[24px] text-darkText">
        <p className="self-center text-lightText dark:text-darkText text-[24px] mb-[24px] font-bold">My Live Spotify Breakdown</p>
        
        <SpotifyCurrent current={spotifyData.current} profile={spotifyData.profile} recent={spotifyData.recentlyPlayed}/>

        {
          typeof spotifyData.topTracks != "string" ?
          <>
            <p className="self-center text-lightText dark:text-darkText text-[20px] mb-[24px] font-bold">Top 20 Tracks Recently</p>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={20}
              className="w-full px-4 active:cursor-pointer"
              autoplay={{delay: 3000}}
              modules={[Autoplay]}
              loop={true}
            >
              {
                spotifyData.topTracks.items?.map((track, index) => (
                  <SwiperSlide className="flex flex-col justify-center items-center w-auto" key={index.toString()}>
                    <SpotifyTopTrackCard track={track} index={index + 1} />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </>
          : <p>{spotifyData.topTracks}</p>
        }
      </div> 
    </div>
  )
};

export default Spotify;