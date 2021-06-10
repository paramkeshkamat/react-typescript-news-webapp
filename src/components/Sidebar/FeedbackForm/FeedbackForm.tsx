import React, { useEffect, useState, useRef } from "react";
import { useGlobalContext } from "../../../context/AppContext";
import countries from "../../../assets/country";
import validator from "validator";
import { BiErrorCircle } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./FeedbackForm.module.css";

const FeedbackForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [showSearchList, setShowSearchList] = useState(false);

  const [isformSubmitted, setIsFormSubmitted] = useState(false);

  const { showFeedbackForm, setShowFeedbackForm } = useGlobalContext()!;
  const formRef = useRef<HTMLDivElement>(null);
  const searchListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formRef.current) {
      if (!showFeedbackForm) {
        formRef.current.style.width = "0px";
        formRef.current.style.opacity = "0";
      } else {
        formRef.current.style.width = "600px";
        formRef.current.style.opacity = "1";
      }
    }
  });

  useEffect(() => {
    const ousideClickEvent = (e: any) => {
      if (!searchListRef.current?.contains(e.target)) {
        setShowSearchList(false);
      }
    };
    window.addEventListener("click", ousideClickEvent);
    return () => window.removeEventListener("click", ousideClickEvent);
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !address || !country || !email || !phone)
      return setError("Please fill all fields!");
    if (!validator.isEmail(email)) {
      return setError("Please enter a valid email!");
    }
    if (!validator.isMobilePhone(phone, "any")) {
      return setError("Please enter a valid number!");
    } else {
      setError("");
      setIsFormSubmitted(true);
      setShowFeedbackForm(false);
    }
    setFirstName("");
    setLastName("");
    setAddress("");
    setCountry("");
    setEmail("");
    setPhone("");
  };

  return (
    <>
      <div className={styles.feedbackForm} ref={formRef}>
        <h1>Thank you so much for taking the time!</h1>
        <p>Please provide below details!</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              placeholder="John"
              value={firstName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFirstName(e.target.value)
              }
            />
          </div>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              placeholder="Doe"
              value={lastName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLastName(e.target.value)
              }
            />
          </div>
          <div>
            <label>Address:</label>
            <textarea
              placeholder="Enter Your full Postal Address"
              value={address}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setAddress(e.target.value)
              }
            />
          </div>
          <div>
            <label>Country:</label>
            <div className={styles.countrySearch} ref={searchListRef}>
              <div className={styles.countrySearchInput}>
                <input
                  type="text"
                  placeholder="Country"
                  value={country}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCountry(e.target.value)
                  }
                  onFocus={() => setShowSearchList(true)}
                />
              </div>
              {showSearchList && (
                <div className={styles.countryList}>
                  {countries
                    .filter((cntry) => {
                      if (country === "") {
                        return cntry;
                      } else if (
                        cntry.name.toLowerCase().includes(country.toLowerCase())
                      ) {
                        return cntry;
                      } else {
                        return false;
                      }
                    })
                    .map((cntry) => (
                      <p
                        key={cntry.code}
                        onClick={() => {
                          setCountry(cntry.name);
                        }}
                      >
                        {cntry.name}
                      </p>
                    ))}
                </div>
              )}
            </div>
          </div>
          <div>
            <label>Email ID:</label>
            <input
              type="text"
              placeholder="sample@example.com"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              placeholder="1234567890"
              value={phone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPhone(e.target.value)
              }
            />
          </div>
          {error && (
            <p className={styles.errorMessage}>
              <BiErrorCircle />
              &nbsp;{error}
            </p>
          )}
          <button type="submit">Submit Feedback</button>
        </form>
      </div>

      {isformSubmitted && (
        <div className={styles.formSubmittedAlert}>
          <div>
            <FaCheckCircle />
            <p>Form Submitted Succesfully!</p>
            <button onClick={() => setIsFormSubmitted(false)}>Okay</button>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackForm;
