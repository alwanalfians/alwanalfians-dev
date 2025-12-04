import { useState } from "react";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState(0);

  const Menu: { title: string; content: string }[] = [
    { title: "Work Experiment", content: "a" },
    { title: "Showcase 😎", content: "b" },
  ];

  return (
    <div>
      <div className="flex float-right">
        {Menu.map((item, index) => (
          <button
            key={index}
            className={`cursor-pointer py-2 px-4 text-xl font-bold hover:text-2xl ${
              activeTab === index ? "" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="mt-4">{Menu[activeTab] && Menu[activeTab].content}</div>
    </div>
  );
};

export default Navigation;
