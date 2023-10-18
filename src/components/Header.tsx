"use client";
import { Sun, Moon, Bell } from "phosphor-react"; // Importe também o ícone Bell
import { useState } from "react";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationPermission, setNotificationPermission] = useState(
    Notification.permission
  );

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  const handleNotificationRequest = () => {
    Notification.requestPermission().then((permission) => {
      setNotificationPermission(permission);

      if (permission === "granted") {
        new Notification("Obrigado!", {
          body: "Você agora receberá notificações sobre as nossas novidades.",
        });
      }
    });
  };

  return (
    <header className="header-title flex justify-between items-center p-4 bg-white dark:bg-gray-800">
      <h1 className="text-xl font-bold">Integration ToDo</h1>
      <div className="flex space-x-4">
        {notificationPermission !== "granted" && (
          <button
            onClick={handleNotificationRequest}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Bell size={24} />
          </button>
        )}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
