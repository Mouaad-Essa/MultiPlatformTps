import React from "react";
import Card from "./Card";

const data = [
  {
    id: 1,
    title: "Profile",
    src: "logo192.png",
  },
  {
    id: 2,
    title: "About",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ab id quaerat alias quod consequuntur quidem ipsa tempora, aliquam natus porro! Nobis voluptates iure cupiditate non laborum illo ipsum tempora.",
  },
  {
    id: 3,
    title: "More",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ab id quaerat alias quod consequuntur quidem ipsa tempora, aliquam natus porro! Nobis voluptates iure cupiditate non laborum illo ipsum tempora.",
  },
];

const Profile = () => {
  return (
    <div className="cards">
      {data.map((item) => {
        return (
          <Card
            key={item.id}
            title={item.title}
            description={item.desc}
            source={item.src}
          />
        );
      })}
    </div>
  );
};

export default Profile;
