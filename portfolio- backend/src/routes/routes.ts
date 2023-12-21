import { Router } from "express";
import Auth from "./auth/auth.routes";
import Sections from "./sections/sections.routes";
import Stack from "./stack/stack.routes";
import experience from "./experience/experience.routes";
import Projects from "./projects/projects.routes";
import Skils from "./skils/skils.routes";
import testimonials from "./testimonials/testimonials.routes";




const routes = Router()


export default routes.use([
  Auth,
  Sections,
  Stack,
  experience,
  Projects,
  Skils,
  testimonials
])
