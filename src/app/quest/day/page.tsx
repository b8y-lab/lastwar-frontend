export default function Page()
{
    const quests = [...Array(8)].map((_, i) => (
        
        <div key={i} className="flex flex-row justify-between items-center w-full h-15 border-t pl-5 my-2">
            <span className="w-15">Daily <br/>Quest</span>
            <span className="border-1 px-5 w-35">Progress 3/5</span>
            <span>Icon</span>
            <button className="button w-20 h-10">Get</button>
        </div>
    ));
    
    return (

        <div className="flex flex-col items-center justify-start h-screen w-full">

            { quests }

            <div className="flex flex-row justify-between items-center w-full h-20 pl-5 my-5">
                <span>Quests are refreshing in 15:23:05</span>
                <button className="button w-30 h-15">Get All</button>
            </div>

        </div>
    )
}