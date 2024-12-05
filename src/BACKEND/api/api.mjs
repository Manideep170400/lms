import login from "../schema/schema.mjs";
import jwt from "jsonwebtoken";
import jwtMiddleware from "../../middelware.mjs";
const userData = login();

const api = (app) => {
  // Create page (POST method)
  app.post("/createUser", async (req, res) => {
    try {
      const exist = await userData.CreateUser.findOne({
        email: req.body.email,
      });
      if (exist) {
        return res.send("User already exists");
      }
      if (req.body.password !== req.body.confirmPassword) {
        return res.send("create a same password please try again");
      }
      const response = await userData.CreateUser.create(req.body);
      await response.save();
      res.status(201).send(response);
    } catch (error) {
      console.error("Error in /createPage:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.post("/loginUser", async (req, res) => {
    try {
      const { email, password } = req.body;
      let exist = await userData.CreateUser.findOne({ email });
      if (!exist) {
        return res.status(404).json({ message: "user not found" });
      }
      if (exist.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      let payload = {
        user: {
          id: exist._id,
        },
      };
      jwt.sign(payload, "jwtSecurity", { expiresIn: "1h" }, (err, token) => {
        if (err) throw err;
        return res.status(200).json({ token });
      });
    } catch (error) {
      console.error("error", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  // Example route (GET method)
  app.get("/", jwtMiddleware, async (req, res) => {
    try {
      const exist = await userData.CreateUser.findById(req.user.id);
      if (!exist) {
        return res.status(404).json({ message: "user not found" });
      }
      res.send(exist);
    } catch (error) {
      console.error("Error in GET /:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  // Update (PUT method)
  app.put("/:id", async (req, res) => {
    try {
      const response = await userData.CreateUser.updateOne(
        { _id: req.params.id },
        req.body
      );
      res.send(response);
    } catch (error) {
      console.error("Error in PUT /:id:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  // Delete (DELETE method)
  app.delete("/:id", async (req, res) => {
    try {
      const response = await userData.CreateUser.findByIdAndDelete(
        req.params.id
      );
      res.send(response);
    } catch (error) {
      console.error("Error in DELETE /:id:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
};

export default api;
