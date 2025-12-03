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
            className={`py-2 px-4 text-xl font-bold ${
              activeTab === index
                ? "border-b-2 border-blue-500 text-blue-600"
                : "hover:text-gray-700"
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
