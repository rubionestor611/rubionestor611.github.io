import { CurrentTrack, RecentlyPlayed, SpotifyProfile } from "../utils/types";

type Props = {
    profile: SpotifyProfile | string;
    current: CurrentTrack | string;
    recent : RecentlyPlayed | string;
}

const SpotifyCurrent = ({profile, current, recent}:Props) => {
    const profileImg = typeof profile == "string" ? null : profile.images?.sort((a,b) => b.width - a.width)[0];
    const currentImg = typeof current == "string" ? null : current.item.album?.images.sort((a,b) => b.width - a.width)[0];
    const recentImg = currentImg || typeof recent == "string" ? null : recent.items[0].track.album.images.sort((a,b) => b.width - a.width)[0];

    return (
        <div className="flex flex-col sm:flex-row self-center px-4 py-4  md:px-8 md:py-8 bg-black rounded-lg flex border border-lightText dark:border-darkText mb-8 mx-4">
            {/* profile */}
            <div className="flex-1 sm:min-w-[300px]">
                {
                    typeof profile != "string" ? 
                    <div className="flex-1 h-full flex flex-col justify-between items-center gap-2">
                        <p className="text-[20px] font-bold text-darkText">Spotify Account</p>
                        <p className="text-lg font-semibold text-darkText">{profile.display_name}</p>
                        <img src={profileImg?.url} draggable={false} className="w-[100px] h-[100px] md:w-[250px] md:h-[250px]"/>
                        <a
                            className="underline text-center text-sm text-darkText hover:cursor-pointer"
                            href={profile.external_urls.spotify}
                            target="__blank"
                        >
                            Wanna visit my account? I currently have only {profile.followers.total} follower{profile.followers.total != 1 ? "s" : ""}
                        </a>
                    </div>
                    : <p>{profile}</p>
                }
            </div>

            <div className="hidden sm:flex inline-block h-auto min-h-[1em] w-0.5 self-stretch bg-darkText opacity-100 opacity-50 mx-6 md:mx-12"/>
            <hr className="flex sm:hidden h-0.5 opacity-50 border-0 my-6 md:my-12 bg-darkText "/>
            {
                typeof current != "string" ?
                <div className="flex-1 sm:min-w-[300px]">
                    <div className="flex-1 h-full flex flex-col justify-between items-center gap-2">
                        <p className="text-[20px] font-bold text-darkText">Currently Playing</p>
                        <img src={currentImg?.url} draggable={false} className="w-[100px] h-[100px] md:w-[250px] md:h-[250px]"/>
                        <p className="text-lg break-words font-bold text-center text-darkText">{current.item.name}</p>
                        <p>{current.item.artists.map((artist) => artist.name).join(", ")}</p>
                    </div>
                </div>
                : (
                    typeof recent != "string" ?
                    <div className="flex-1 sm:min-w-[300px]">
                        <div className="flex-1 h-full flex flex-col justify-between items-center gap-2">
                            <p className="text-[20px] font-bold text-darkText">Most Recently Played</p>
                            <img src={recentImg?.url} draggable={false} className="w-[100px] h-[100px] md:w-[250px] md:h-[250px]"/>
                            <p className="text-lg break-words font-bold text-center text-darkText">{recent.items[0].track.name}</p>
                            <p>{recent.items[0].track.artists.map((artist) => artist.name).join(", ")}</p>
                        </div>
                    </div>
                    :
                    <div className="flex-1 h-full flex flex-col justify-center items-center gap-2">
                        <p className="flex-1 text-[20px] font-bold text-darkText">Recently Played</p>
                        <p className="flex-1 text-center text-sm text-darkText">{recent}</p>
                    </div>
                )
            }
            
        </div>
    )
};

export default SpotifyCurrent;