import React, { useRef, useState } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import StatisticCard from "../AdminStatisticCard";
import UsersManagerAdmin from "../AdminUsersManager";
import ReportsManagerAdmin from "../AdminReportsManager";

const HomeAdmin = () => {
  const [toggle, setToggle] = useState("home");

  const [statisticToggle, setStatisticToggle] = useState("week");

  const dataUsersStatistic = {
    week: 6,
    month: 23,
    year: 153,
  };

  const dataAvarageHoursStatistic = {
    week: 15,
    month: 22,
    year: 20,
  };

  return (
    <section className={styles.homeMain}>
      <div className={styles.homeLeftControl}>
        <img src="../icons/logo.png" />
        <h2>MANAGEMENTS</h2>

        <div className={styles.homeTabs}>
          <div
            className={
              toggle === "home"
                ? `${styles.homeTabItem} ${styles.active}`
                : `${styles.homeTabItem}`
            }
            onClick={() => setToggle("home")}
          >
            <img src="./icons/home.png" />
            <p>Home</p>
          </div>

          <div
            className={
              toggle === "users"
                ? `${styles.homeTabItem} ${styles.active}`
                : `${styles.homeTabItem}`
            }
            onClick={() => setToggle("users")}
          >
            <img src="./icons/users_manager.png" />
            <p>Users Manager</p>
          </div>

          <div
            className={
              toggle === "reports"
                ? `${styles.homeTabItem} ${styles.active}`
                : `${styles.homeTabItem}`
            }
            onClick={() => setToggle("reports")}
          >
            <img src="./icons/reports_manager.png" />
            <p>Reports Manager</p>
          </div>
        </div>

        <div className={styles.homeDecs}>
          <img src="./icons/line.png" />
          <h3>Mask Warning Admin Website</h3>
          <p>
            Mask Warning Admin Website is a system help store notify customer
            wearing mask
          </p>
        </div>
      </div>

      <div className={styles.homeTabContents}>
        <div className={styles.homeTopRightControl}>
          <p>Admin</p>
          <img src="./icons/bell.png" />
          <img src="./icons/dashicons-migrate.png" />
        </div>
        <div
          className={
            toggle === "home"
              ? `${styles.homeTabContent} ${styles.active}`
              : `${styles.homeTabContent}`
          }
        >
          <div className={styles.homeStatisticButtonGroup}>
            <div
              className={
                statisticToggle === "week"
                  ? `${styles.homeStatisticButton} ${styles.active}`
                  : styles.homeStatisticButton
              }
              onClick={() => setStatisticToggle("week")}
            >
              <img src="./icons/ellipse.png" />
              <p>Week</p>
            </div>
            <div
              className={
                statisticToggle === "month"
                  ? `${styles.homeStatisticButton} ${styles.active}`
                  : styles.homeStatisticButton
              }
              onClick={() => setStatisticToggle("month")}
            >
              <img src="./icons/ellipse.png" />
              <p>Month</p>
            </div>
            <div
              className={
                statisticToggle === "year"
                  ? `${styles.homeStatisticButton} ${styles.active}`
                  : styles.homeStatisticButton
              }
              onClick={() => setStatisticToggle("year")}
            >
              <img src="./icons/ellipse.png" />
              <p>Year</p>
            </div>
          </div>
          <div className={styles.homeStatisticCards}>
            <StatisticCard
              cardName={"User(s)"}
              data={dataUsersStatistic[statisticToggle]}
              dataType={" new user(s)"}
              iconLink={"./icons/new_users.png"}
            />
            <StatisticCard
              cardName={"Average hour(s) per day"}
              data={dataAvarageHoursStatistic[statisticToggle]}
              dataType={" hour(s) per day"}
              iconLink={"./icons/average_hours.png"}
            />
          </div>
        </div>

        <div
          className={
            toggle === "users"
              ? `${styles.homeTabContent} ${styles.active}`
              : `${styles.homeTabContent}`
          }
        >
          <UsersManagerAdmin />
        </div>

        <div
          className={
            toggle === "reports"
              ? `${styles.homeTabContent} ${styles.active}`
              : `${styles.homeTabContent}`
          }
        >
          <ReportsManagerAdmin />
        </div>
      </div>
    </section>
  );
};

export default HomeAdmin;
