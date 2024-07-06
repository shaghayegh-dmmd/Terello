
import Image1 from "../../asserts/Img/Image1.jpg";
import Image2 from '../../asserts/Img/image2.jpg';


const Viewrecently = () => {

    const lists = [
        { text: 'FrontEnd', image: Image2 },
        { text: 'Coordination', image: Image1 },
        { text: 'BackEnd', image: Image2 },

    ];


    return (
        <div>

            <div className="flex flex-wrap">

                {lists.map(list => (
                    <div className="w-40 h-20 overflow-hidden m-2 relative">
                        <img className="w-40 h-20" src={list.image} />
                        <p className="text-white absolute top-0 font-bold p-2">{list.text}</p>
                    </div>
                ))}
            </div>




        </div>
    );
};

export default Viewrecently;