import { CardsText } from "@/utils/constants"
import Card from "./Card"

const HomePageBottom = () => {



    return(
        <div className="w-full p-4 flex flex-col md:flex-row flex-wrap justify-around">
            {CardsText.map((card:any) => {
                return (
                    <Card key={card.heading} heading={card.heading} content={card.content} />
                )
            })}
        </div>
    )
}

export default HomePageBottom