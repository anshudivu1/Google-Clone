import React from "react";
import './searchresult.css';
import { useStateValue } from "../StateProvider";
import useGoogle from "../usegoogle";
import { Link } from 'react-router-dom';
import SearchPage from './SearchPage';
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Searchresults() {
  const [{ term }] = useStateValue();
  const { data } = useGoogle(term);

  console.log("Search term:", term);  // Debugging line
  console.log("API data:", data);  // Debugging line

  return (
    <div className="searchresult">
      <div className="search_header">
        <Link to="/">
          <img
            className="searchresults_logo"
            src="https://images.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
          />
        </Link>

        <div className="header_body">
          <SearchPage hideButtons />

          <div className="searchpageOptions">
            <div className="optionLeft">
              <div className="option">
                <SearchIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="optionRight">
              <div className="option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {data && data.searchInformation && (
        <div className="search_result">
          <p className="searchpageresultcount">
            About {data.searchInformation.formattedTotalResults} results (
            {data.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {/* {data.items?.map((item, index) => (
            <div key={index} className="result">
              <a href={item.link}>{item.displayLink}</a>
              <a className="result_title" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="result_snippet">{item.snippet}</p>
            </div>
          ))} */}

          {data ?.items.map(item => (
            <div className="result">
                <a className="resul_title"href={item.link}>
                    {item.displayLink}
                   <h2> {item.title} </h2>
                   <p className="result_snippet">{item.snippet} </p>
                </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Searchresults;
