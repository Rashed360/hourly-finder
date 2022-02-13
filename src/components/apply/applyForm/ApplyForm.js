import React from 'react';

const ApplyForm = () => {
    return (
        <div className="apply-form">
          <div className="form">
            <h2>Apply for the job?</h2>
            <form action="">
              <div className="form-field name">
                <label for="">Name</label>
                <input type="text" placeholder="Enter Full Name" />
              </div>
              <div className="form-field name">
                <label for="">Phone</label>
                <input type="text" placeholder="Enter Phone NUmber" />
              </div>
              <div className="form-field address">
                <label for="">Address</label>
                <input type="text" placeholder="Enter Address" />
              </div>
              <div className="form-field message">
                <label for="">Message</label>
                <textarea
                  name=""
                  id=""
                  cols="10"
                  rows="3"
                  placeholder="Write Message"
                ></textarea>
              </div>
              <div className="form-field agree">
                <input type="checkbox" name="" />
                <label for="">
                  I agree to the HourlyFinder’s terms & conditions.
                </label>
              </div>
              <div className="form-field">
                <input type="submit" value="Apply" className="btn submit" />
              </div>
            </form>
          </div>
        </div>
    );
};

export default ApplyForm;