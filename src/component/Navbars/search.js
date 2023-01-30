

import { useState, useEffect } from "react";

import { fetchAllmovies } from "../../api/api";
export default function Search() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetchAllmovies().then(res => setList(res.data))
    }, []); // <-- add param to the dependency array
    console.log(list)
    const data = list.map(item => ({ "title": item.title, "id": item.id }))
    console.log(data);
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSearch = (itemId) => {
        // setValue(itemId);
        // our api to fetch the search result
        console.log("search ", itemId);
        window.location.href = `/movies/${itemId}`;
    };

    return (
        <div className="d-flex justify-content-center mt-5 ">


            <div className="search-container search border-danger rounded">
                <div className="search-inner">
                    <input type="text" placeholder="Search Movie Name " className="inp" value={value} onChange={onChange} />
                    {/* <button className="btn btn-danger" onClick={() => onSearch(value)}> Search </button> */}
                </div>
                <div className="dropdown rounded">
                    {data
                        .filter((item) => {
                            const searchTerm = value.toLowerCase();
                            const fullName = item.title.toLowerCase();

                            return (
                                searchTerm &&
                                fullName.startsWith(searchTerm) &&
                                fullName !== searchTerm
                            );
                        })
                        .slice(0, 10)
                        .map((item) => (
                            <div
                                onClick={() => onSearch(item.id)}
                                className="dropdown-row rounded border-danger"
                                key={item.id} // <-- change to use the id as the key
                            >
                                {item.title}
                            </div>
                        ))}

                </div>
            </div>
        </div>
    );
}