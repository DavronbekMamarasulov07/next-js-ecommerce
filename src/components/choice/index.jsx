import React from 'react'
import ChoiceCard from '../choice-card';
import Container from '../container';
import ButtonLink from '../button-link';

const Choice = () => {
    const choices = [
      {
        id: 1,
        title: "Только проверенные бренды",
        content: "Бренды, проверенные временем и качеством",
        image: "/images/choice1.svg",
      },
      {
        id: 2,
        title: "Самые низкие цены",
        content: "Ниже не будет нигде",
        image: "/images/choice2.svg",
      },
      {
        id: 3,
        title: "Быстрая доствка",
        content: "Доставляем по всей РФ за 1-10 дней",
        image: "/images/choice3.svg",
      },
      {
        id: 4,
        title: "Большой ассортимент",
        content: "Более 1000 товаров",
        image: "/images/choice4.svg",
      },
    ];
  return (
    <Container>
      <div className="mt-[50px] ">
        <div className="w-full flex items-center justify-between md:mb-[40px] mb-[32px]">
          <h2 className="md:text-[40px] text-[28px]  text-[#454545] font-bold ">
            Почему NORNLIGHT?
          </h2>
          <div className="hidden md:flex">
            <ButtonLink link="/about">О компании</ButtonLink>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {choices.map((choice) => (
            <ChoiceCard key={choice.id} choice={choice} />
          ))}
        </div>
        <div className="flex md:hidden">
          <ButtonLink link="/about">О компании</ButtonLink>
        </div>
      </div>
    </Container>
  );
}

export default Choice


