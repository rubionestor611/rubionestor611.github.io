import { Track } from "../utils/types";

type Props = {
    track: Track;
    index: number;
}

const SpotifyTopTrackCard = ({track, index}: Props) => {
    const image = track.album.images[0];
    const artists = track.artists.map(item => item.name).join(", ")
    return (
        <div className="bg-black rounded-lg flex flex-col border justify-evenly items-center w-[350px] md:w-[500px] aspect-[7/5] py-2 px-4 my-2 select-none">
            <p className="absolute bottom-2 right-2 text-darkText text-lg">#{index}</p>
            <img src={image.url} className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
            <div className="text-wrap flex flex-col gap-[10px]">
              <p className="text-lg break-words font-bold text-center text-darkText">{track.name}</p>
              <p className="text-sm break-words text-center text-darkText">{artists}</p>
            </div>
            
        </div>
    )
};

export default SpotifyTopTrackCard;