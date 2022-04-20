import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "../components/NotFoundPage";
import StartPage from "../components/StartPage";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SimpleSelect from "../components/SurveyPage";
import ExperimentPage from "../components/ExperimentPage";
import FinalPage from "../components/Final Page";

const AppRouter = () => (
    <BrowserRouter>
        <div>
        <NavBar/>
        <Routes>
            <Route path="/"  element={<StartPage/>}/>
            <Route path="/surveyform" element={<SimpleSelect/>}  />
            <Route path="/survey" element={<ExperimentPage/>}/>
            <Route path="/submitSurvey" element={<FinalPage/>} />
            <Route path="*" component={PageNotFound} />
        
        </Routes>
        <Footer/>
        </div>
    </BrowserRouter>
)

export default AppRouter;
