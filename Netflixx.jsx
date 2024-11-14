import seriesData from "../api/thapa_series.json";

function Netflixx() {
  return (
    <ul>
      {seriesData.map((curElem) => {
        return (
          <li key={curElem.id}>
            <div>
              <img
                src={seriesData[0].img_url}
                alt="qot.jpg"
                width="40%"
                height="40%"
              />
            </div>
            <h2>Name:{seriesData[0].name}</h2>
            <h3>Rating:{seriesData[0].rating}</h3>
            <p>Summary:{seriesData[0].description}</p>
            <p>Genre:{seriesData[0].genre}</p>
            <p>Cast:{seriesData[0].cast}</p>

            <a href={seriesData[0].watch_url} target="_blank">
              <button>Watch Now</button>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Netflixx;
