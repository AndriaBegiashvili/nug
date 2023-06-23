import React from "react";
import classes from "../modules/News.module.css";
import Image1 from "../assets/arrow1.png";
import Image2 from "../assets/arrow2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../UI/Button";
import Slider1 from "../assets/slider1.png";
import Slider2 from "../assets/slider2.png";
import Slider3 from "../assets/slider3.png";
import Slider4 from "../assets/slider4.png";
import "swiper/swiper.min.css";


const News = () => {
  const [swiper, setSwiper] = React.useState(null);

  const nexto = () => {
    swiper.slideNext();
  };
  const prevo = () => {
    swiper.slidePrev();
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.text_container}>
          <div className={classes.row}>
            <h4>NEWS</h4>
          </div>
          <div className={classes.center}>
            <div className={`${classes.row} ${classes.gap}`}>
              <img onClick={prevo} src={Image2} className={classes.next_prev} alt="second arrow"></img>
              <img onClick={nexto}  src={Image1} className={classes.next_prev} alt="first arrow" />
            </div>
          </div>
        </div>
        <div className={classes.swiper_container}>
          <Swiper spaceBetween={20} slidesPerView={3.5} 
          onSwiper={(s) => {
            console.log("initialize swiper", s);
            setSwiper(s);
          }}
          navigation={true}>
            <SwiperSlide>
              <div className={classes.card}>
                <div className={classes.image_container}>
                <img src={Slider1} alt="ara"></img>
                </div>
                <div className={classes.card_text}>
                  <h4>There are many variations of passages</h4>
                  <p>22 April 2023</p>
                  <Button/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={classes.card}>
            <div className={classes.image_container}>
              <img src={Slider2} alt="ara"></img>
              </div>
              <div className={classes.card_text}>
                  <h4>The point of using Lorem Ipsum</h4>
                  <p>20 April 2023</p>
                  <Button/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={classes.card}>
            <div className={classes.image_container}>
              <img src={Slider3} alt="ara"></img>
              </div>
              <div className={classes.card_text}>
                  <h4>I must explain to you how all this mistaken idea</h4>
                  <p>19 April 2023</p>
                  <Button/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={classes.card}>
            <div className={classes.image_container}>
              <img src={Slider4} alt="ara"></img>
              </div>
              <div className={classes.card_text}>
                  <h4>On the other hand, we denounce with righteous indignation</h4>
                  <p>15 April 2023</p>
                  <Button/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={classes.card}>
            <div className={classes.image_container}>
              <img src={Slider1} alt="ara"></img>
              </div>
              <div className={classes.card_text}>
                  <h4>The point of using Lorem Ipsum</h4>
                  <p>20 April 2023</p>
                  <Button/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={classes.card}>
            <div className={classes.image_container}>
              <img src={Slider3} alt="ara"></img>
              </div>
              <div className={classes.card_text}>
                  <h4>I must explain to you how all this mistaken idea</h4>
                  <p>19 April 2023</p>
                  <Button/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={classes.card}>
            <div className={classes.image_container}>
              <img src={Slider4} alt="ara"></img>
              </div>
              <div className={classes.card_text}>
                  <h4>On the other hand, we denounce with righteous indignation</h4>
                  <p>15 April 2023</p>
                  <Button/>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default News;
