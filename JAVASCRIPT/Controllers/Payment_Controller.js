import Feedback from "../Models/Feedback.js";
import FeedbackService from "../Services/Feedback_service.js";
import EventService from "../Services/Events_Service.js";
import UserService from "../Services/Add_User_Service.js";
$(document).ready(function () {
  // Get User Data
  let uid = sessionStorage.getItem("Id");
  UserService.getUserDetailsbyid(uid)
    .then((res) => {
      let uname = res._FullName;
      $("#name").text(uname);
    })
    .catch((err) => {
      console.log(err);
    });
  const urlparams = new URLSearchParams(window.location.search);
  const eventId = urlparams.get("id");

  //Getting User name

  // end
  //Getting Receipt details of event
  EventService.geteventDetailsbyid(eventId)
    .then((response) => {
      let eventDetails = response;
      let Ename = eventDetails.event_name;
      $("#movie").text(Ename);
      $(document).on("click", "#proceed-btn", function () {
        const Id = $(this).attr("eventId");
        window.location.href = "Feedback.html?id=" + Id;
      });
      // end
      $(document).on("click", "#toggle", function () {
        let form = `
        <h2 id="msg" style="text-align:center">Payment Successful</h2><br/>
    
        <img
              src="../IMAGES/success.gif"
              alt=""
              style="max-height: 100px; max-width: 100px;margin:20px 45%"
            />
        <div class="form-group">
        <label for="feedbackStatement">Please rate your experience: </label
        ><br />
        <div class="d-flex">
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              name="feedback"
              value="5"
              id="rating5"
            />
            <label class="form-check-label" for="rating5">Excellent😊 </label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              name="feedback"
              value="4"
              id="rating4"
            />
            <label class="form-check-label" for="rating4">Very Good😄 </label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              name="feedback"
              value="3"
              id="rating3"
            />
            <label class="form-check-label" for="rating3">Good🙂 </label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              name="feedback"
              value="2"
              id="rating2"
            />
            <label class="form-check-label" for="rating2">Fair😐 </label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              name="feedback"
              value="1"
              id="rating1"
            />
            <label class="form-check-label" for="rating1">Poor😒 </label>
          </div>
        </div>
      </div>
      <div class="form-group">
            <label for="additionalComments">Additional Comments:</label>
            <textarea
              class="form-control"
              id="additionalComments"
              rows="3"
              placeholder="Feel free to share more details"
            ></textarea>
          </div>
          <!-- Submit Button -->
          <button type="button" id="success" class="btn btn-warning m-2">
            Submit Feedback
          </button>
    `;
        $("#feedback_container").append(form);
      });

      $(document).on("click", "#success", function () {
        let Uname = $("#name").text();
        let movie = $("#movie").text();
        let currDate = $("#currDate").text();
        let amount = $("#amount").text();

        let User_feedback = new Feedback();
        User_feedback._username = Uname;
        User_feedback._moviename = movie;
        User_feedback._date = currDate;
        User_feedback._amount = amount;
        alert("Feedback Submitted");
        FeedbackService.addFeedbackDetails(User_feedback)
          .then((response) => {
            window.location.href = "../HTML/index.html";
          })
          .catch((error) => {
            console.log("Error: ", error);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
// end
