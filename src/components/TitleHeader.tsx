import BackButton from "@/components/BackButton.tsx";
import SettingsModal from "@/components/SettingsModal.tsx";

interface ITitleHeader {
    title: string;
    back?: string;
}

export default function TitleHeader({ title, back }: ITitleHeader)
{
    return (
        <div className="w-full h-15 flex flex-row items-center justify-around relative p-5 border-b">
            
            <div className="w-1/4">
                <SettingsModal />
            </div>
            
            <h1 className="w-1/2 text-[20px] text-center">{title}</h1>
            
            <div className="w-1/4 flex justify-end">
                <BackButton back={back} />
            </div>
            
        </div>
    )
}