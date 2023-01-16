import React from "react";
import ReactDOM from "react-dom";



function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="myPic" className="card_img" />
          <div className="card_info">
            <span className="card_category"></span>
            <h3 className="card_title">RAID</h3>
            <a href="" target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
ReactDOM.render(
  <>
    <Card
      MovName="RAID"
      imgsrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1270/1431270-v-b6bfc3b82ee5"
      title="Hotstar Movie"
      links="https://www.hotstar.com/in/movies/raid/1000212789"
    />

    <Card
      MovName="BAAGHI 3"
      imgsrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v"
      title="Hotstar Movie"
      links="https://www.hotstar.com/in/movies/baaghi-3/1260025583"
    />

    <Card
      MovName="CHHICHHORE"
      imgsrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9219/1389219-v-9752e6e5bb92"
      title="Hotstar Movie"
      links="https://www.hotstar.com/in/movies/chhichhore/1260012713"
    />

    <Card
      MovName="SUPER 30"
      imgsrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9231/1389231-v-6191b0d9af4f"
      title="Hotstar Movie"
      links="https://www.hotstar.com/in/movies/super-30/1260009172"
    />

    <Card
      MovName="BADHAAI HO"
      imgsrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7309/177309-v"
      title="Hotstar Movie"
      links="https://www.hotstar.com/in/movies/badhaai-ho/1000120365"
    />

    <Card
      MovName="TOTAL DHAMAAL"
      imgsrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1270/1431270-v-b6bfc3b82ee5"
      title="Hotstar Movie"
      links="https://www.hotstar.com/in/movies/total-dhamaal/1000233697"
    />

    <Card
      MovName="DRISHYAM"
      imgsrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/4189/1000074189/1000074189-v"
      title="Hotstar Movie"
      links="https://www.hotstar.com/in/movies/drishyam/1000074189"
    />

    <Card
      MovName="BABY"
      imgsrc="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1248/1431248-v-af62a54a6d8d"
      title="Hotstar Movie"
      links="https://www.hotstar.com/in/movies/baby/1000053838"
    />
  </> ,document.getElementById('root')
);