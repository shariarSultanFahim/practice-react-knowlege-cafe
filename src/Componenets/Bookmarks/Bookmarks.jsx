import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 text-center bg-gray-300 ml-2 p-2 rounded-xl">

            <h1 className="text-3xl bg-white m-4 rounded-xl">Reading Time: {readingTime}</h1>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark = {bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
}
export default Bookmarks;