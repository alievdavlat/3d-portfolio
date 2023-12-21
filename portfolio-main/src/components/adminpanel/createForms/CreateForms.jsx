import React from "react";
import { experienceSchema, projectInpShema, projectInpShemaSub, skilsSchema, stackSchema, tagColors, testimonialsSchema } from "../../../constants";
import { useParams } from "react-router-dom";
import {UseAxios} from '../../../hooks/useAxios'
import { notification } from "antd";




const CreateForms = () => {
  const params = useParams()
  const {id} = params


  const [projectInp , setProjectInp] = React.useState(projectInpShema)
  const [subProjectInp , setSubProjectInp] = React.useState(projectInpShemaSub)

  const [skilsInp, setSkilsInp] = React.useState(skilsSchema)
  const [testimonialINp, settestimonialsInp] = React.useState(testimonialsSchema)
  const [experienceInp, setExperience] = React.useState(experienceSchema)
  const [stackInp, setStackInp] = React.useState(stackSchema)

  const [subExperienceInp, setSubExperience] = React.useState({decription:''})


  const changeHandle = (e) => {

    setProjectInp(() => ({ ...projectInp, [e.target.name] : e.target.value }))
    setSkilsInp( () => ( {...skilsInp, [e.target.name]: e.target.value } ))
    settestimonialsInp(() => ( {...testimonialINp, [e.target.name]: e.target.value} ))
    setExperience( () => ( { ...experienceInp, [e.target.name]: e.target.value}))
    setStackInp(() => ({...stackInp, [e.target.name]: e.target.value}))

  }

  const subChangeHandle = (e) => {
    setSubExperience(() => ({...subExperienceInp, [e.target.name]: e.target.value}))
    setSubProjectInp(() => ({...subProjectInp, [e.target.name]: e.target.value}))
  }


  const onAddHandle = (key) => {

    if (key == 'proSub') {
      projectInp.tags.push(subProjectInp)
      setProjectInp(projectInp)
      setSubProjectInp( {
        name:'',
        colors:''
      })

    }
    
    if (key == 'exsub') {
      experienceInp.decription.push(subExperienceInp.decription)
      setExperience(experienceInp)
      setSubExperience({decription:''})
    }


  }



const projectSubmitHandle = async(e) => {
  e.preventDefault()
  
  const request = UseAxios()

  
  try {
   
    const res = await request({
      url: "/projects",
      method: "POST",
      body: { ...projectInp },
    })


    if (res.status !== 201 || res.statusText !== 'Created' ) {
      return notification.error({ message:res.message });
    }

    
    if (res.data.msg) {
      notification.success({ message:res.data.msg });
    }

  } catch (err) {
    notification.error({ message:err });
  }

  setProjectInp(projectInpShema)
  setSubProjectInp( {
    name:'',
    colors:''
  })
}

const experienceSubmitHandle = async (e) => {
  e.preventDefault()
  const request = UseAxios()


    try {
      const res = await request({
        url: "/experience",
        method: "POST",
        body: { ...experienceInp },
      })

      if (res.status !== 201 || res.statusText !== 'Created' ) {
        return notification.error({ message:res.message });
      }
  
      
      if (res.data.msg) {
        notification.success({ message:res.data.msg });
      }

    } catch (err) {
          notification.error({ message:err });
    }

  setExperience(experienceSchema)
  setSubExperience({decription:''})
}

const skilsSubmitHandle = async (e) => {
  e.preventDefault()
  const request = UseAxios()


    try {
      const res = await request({
        url: "/skils",
        method: "POST",
        body: { ...skilsInp },
      })

      if (res.status !== 201 || res.statusText !== 'Created' ) {
        return notification.error({ message:res.message });
      }
  
      
      if (res.data.msg) {
        notification.success({ message:res.data.msg });
      }

    } catch (err) {
          notification.error({ message:err });
    }

  setSkilsInp(skilsSchema)
}

const testimonialSubmitHandle = async (e) => {
  e.preventDefault()
  const request = UseAxios()


    try {
      const res = await request({
        url: "/testimonials",
        method: "POST",
        body: { ...testimonialINp },
      })

      if (res.status !== 201 || res.statusText !== 'Created' ) {
        return notification.error({ message:res.message });
      }
  
      
      if (res.data.msg) {
        notification.success({ message:res.data.msg });
      }

    } catch (err) {
          notification.error({ message:err });
    }

  settestimonialsInp(testimonialsSchema)
}

const stackSubmitHandle = async (e) => {
  e.preventDefault()
  const request = UseAxios()


    try {
      const res = await request({
        url: "/stack",
        method: "POST",
        body: { ...stackInp },
      })

      if (res.status !== 201 || res.statusText !== 'Created' ) {
        return notification.error({ message:res.message });
      }
  
      
      if (res.data.msg) {
        notification.success({ message:res.data.msg });
      }

    } catch (err) {
          notification.error({ message:err });
    }
  setStackInp(stackSchema)
}

  return (
  <div className="w-full mx-aut p-16">
     
            {
            id == 'create-project' ?  
            <form onSubmit={projectSubmitHandle}>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">

              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Project name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={projectInp.name}
                  onChange={(e) => changeHandle(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="project name..."
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Image link
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={projectInp.image}
                  onChange={(e) => changeHandle(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Image link ..."
                  required
                  autoComplete="false"
                />
              </div>

              

              <div>
                <label
                  htmlFor="tags"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Tag name
                </label>
                <input
                  type="text"
                  id="tags"
                  name="name"
                  value={subProjectInp.name}
                  onChange={(e) => subChangeHandle(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Technologies"
                  autoComplete="false"
                />
              </div>

              
              <div>
                <label
                  htmlFor="colors"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Colors
                </label>
                <select
                  onChange={(e) => subChangeHandle(e)}
                  name="colors"
                  id="colors"
                  value={subProjectInp.colors}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {tagColors.map((item, index) => (
                    <option key={item} className={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>


              <div>
                <button
                  type="button"
                  onClick={() => onAddHandle('proSub')}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Add
                </button>
              </div>

              
              <br />
                
              <div>
                <label
                  htmlFor="stack"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Stack name
                </label>
                <input
                  type="text"
                  id="sctak"
                  name="stack"
                  value={projectInp.stack}
                  onChange={(e) => changeHandle(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="stack name ..."
                  required
                  autoComplete="false"
                />
              </div>

              <div>
                <label
                  htmlFor="source"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Source Code link
                </label>
                <input
                  type="text"
                  id="source"
                  name="source"
                  value={projectInp.source}
                  onChange={(e) => changeHandle(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Source code link"
                  required
                  autoComplete="false"
                />
              </div>


            </div>

            <div className="mb-6">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Description
              </label>
              <textarea
                type="text"
                id="description"
                name="description"
                value={projectInp.description}
                onChange={(e) => changeHandle(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="some text ..."
                required
              />
            </div>
              
              
            <div className="mb-6">
                <label
                  htmlFor="website"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Iframe URL
                </label>
                <input
                  type="url"
                  id="website"
                  name="iframe"
                  value={projectInp.iframe}
                  onChange={(e) => changeHandle(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="https://uiverse.io"
                  required
                  autoComplete="false"
                />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Submit
            </button>
            </form> 
            : ''
            }

            {
            id == 'create-skils' ?
            <form onSubmit={skilsSubmitHandle}>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">

            <div>
              <label
                htmlFor="technology"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Technology name
              </label>
              <input
                type="text"
                name="title"
                value={skilsInp.title}
                onChange={(e) => changeHandle(e)}
                id="technology"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Technology name..."
                required
              />
            </div>

            <div>
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Image link
              </label>
              <input
                type="text"
                id="image"
                name="icon"
                value={skilsInp.icon}
                onChange={(e) => changeHandle(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Image link ..."
                required
                autoComplete="false"
              />
            </div>

            </div>


            <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Send
            </button>
            </form> 
            : ''
            }


            {
            id == 'create-testimonials' ?
            <form onSubmit={testimonialSubmitHandle}>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">

            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Testimonial name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={testimonialINp.name}
                onChange={(e) => changeHandle(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="testimonial name..."
                required
              />
            </div>

            <div>
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Testimonial Image 
              </label>
              <input
                type="text"
                id="image"
                name="image"
                value={testimonialINp.image}
                onChange={(e) => changeHandle(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Testimonial Image ..."
                required
                autoComplete="false"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Company name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={testimonialINp.company}
                onChange={(e) => changeHandle(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="company name"
                required
                autoComplete="false"
              />
            </div>

            </div>

            <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Description
            </label>
            <textarea
              type="text"
              id="description"
              name="description"
              value={testimonialINp.description}
              onChange={(e) => changeHandle(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="some text ..."
              required
            />
            </div>

            <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Send
            </button>

            </form>
            : ''
            }  

            {
            id == 'create-experience' ?
            <form onSubmit={experienceSubmitHandle}>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">

            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={experienceInp.title}
                onChange={(e) => changeHandle(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="stack name..."
                required
              />
            </div>

            <div>
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Company name
              </label>
              <input
                type="text"
                id="company"
                name="company_name"
                value={experienceInp.company}
                onChange={(e) => changeHandle(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="company name ..."
                required
                autoComplete="false"
              />
            </div>

            <div>
              <label
                htmlFor="company_logo"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Company logo
              </label>
              <input
                type="text"
                id="company_logo"
                name="logo"
                value={experienceInp.logo}
                onChange={(e) => changeHandle(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="company logo"
                required
                autoComplete="false"
              />
            </div>


            <div>
              <label
                htmlFor="company_logo"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Logo background
              </label>
              <input
                type="text"
                id="logo_background"
                name="logo_background"
                value={experienceInp.logo_background}
                onChange={(e) => changeHandle(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Logo background"
                required
                autoComplete="false"
              />
            </div>

            <div>
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Date
              </label>
              <input
                type="text"
                id="date"
                name="date"
                value={experienceInp.date}
                onChange={(e) => changeHandle(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="work year"
                required
                autoComplete="false"
              />
            </div>


            </div>

            <div className="mb-6">
            <label
              htmlFor="decription"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Description 
            </label>
           <div className="flex gap-4">
           <textarea
              type="text"
              id="description"
              name="decription"
              value={subExperienceInp.decription}
              onChange={(e) => subChangeHandle(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="some text ..."
            />

            <button
            type="button"
            onClick={() => onAddHandle('exsub')}
            className="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            add
            </button>

           </div>
            </div>

            <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Send
            </button>

            </form> 
            : ''
            }  

            {
            id == 'create-stack' ?
            <form onSubmit={stackSubmitHandle}>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">

            <div>
              <label
                htmlFor="technology"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Technology name
              </label>
              <input
                type="text"
                name="title"
                id="technology"
                value={stackInp.title}
                onChange={(e) => changeHandle(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Technology name..."
                required
              />
            </div>

            <div>
              <label
                htmlFor="icon"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Image link
              </label>
              <input
                type="text"
                id="icon"
                name="icon"
                value={stackInp.icon}
                onChange={(e) => changeHandle(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="icon ..."
                required
                autoComplete="false"
              />
            </div>

            </div>


            <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Send
            </button>
            </form>
            : ''
            }

  </div>    
  );


};

export default CreateForms;


