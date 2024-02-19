import { Button } from "../Button/Button";
import "./Form.css";

export const Form = () => {
  return `
    <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="subject">Subject:</label>
    <input type="text" id="subject" name="subject" required>

    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" required></textarea>

    <div class="services">
    <input type="checkbox" id="termsCheckbox">
    <label for="termsCheckbox">I accept the terms and conditions of the service.</label>
    </div>

    <div class="services">
    <input type="checkbox" id="subscribeCheckbox">
    <label for="subscribeCheckbox">I agree to receive updates, exclusive content, communications (including electronically), and special offers.</label>
    </div>

    ${Button("Send")}
  </form>
    `;
};
