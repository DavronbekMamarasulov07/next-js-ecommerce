import React from 'react'
import Container from '../container'

const BlogAbout = () => {
  return (
    <Container>
      <div className="w-full flex flex-col md:flex-row  items-start justify-between my-[60px] md:my-[100px]">
        <h3 className=" mb-[24px] md:mb-0 text-[#454545] max-w-[330px] text-[28px] font-bold  md:text-[40px]">
          Производство светильников
        </h3>
        <div className="max-w-[640px] flex flex-col gap-4 text-[16px]  md:text-[20px] text-[#646464]">
          <p>
            Интернет-магазин NORNLIGHT предлагает широкий ассортимент
            светильников для освещения вашего дома или офиса. У нас вы найдете
            разнообразные модели светильников, от современных и стильных до
            классических и элегантных. Мы предлагаем качественные и надежные
            светильники от лучших производителей, которые подарят вам комфорт и
            уют.
          </p>
          <p>
            Покупая светильники в нашем интернет-магазине, вы получаете отличное
            соотношение цены и качества. Мы осуществляем доставку по всей
            России, чтобы каждый клиент мог насладиться прекрасным светом и
            удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш
            дом в оазис тепла и света с NORNLIGHT!
          </p>
        </div>
      </div>
    </Container>
  );
}

export default BlogAbout