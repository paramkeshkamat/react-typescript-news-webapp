import React from "react";
import styles from "./UserProfile.module.css";

const UserProfile: React.FC = () => {
  return (
    <div className={styles.userProfile}>
      <div className={styles.leftDiv}>
        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="profile"
        />
      </div>
      <div className={styles.rightDiv}>
        <h2>Hi Reader,</h2>
        <p>Here's your news</p>
      </div>
    </div>
  );
};

export default UserProfile;
