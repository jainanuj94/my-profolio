import {WorkTimeline} from "@/components/WorkTimeline.tsx";
import {GitGallery} from "@/components/GitGallery.tsx";
import {BlogList} from "@/components/BlogList.tsx";
import {Fragment} from "preact";
import AboutMe from "@/components/AboutMe.tsx";

export const LandingPage = () => {
    return (
        <Fragment>
            <AboutMe/>
            <WorkTimeline/>
            <GitGallery/>
            <BlogList/>
        </Fragment>
    );
};