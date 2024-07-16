import {WorkTimeline} from "@/components/WorkTimeline.tsx";
import {GitGallery} from "@/components/GitGallery.tsx";
import {BlogList} from "@/components/BlogList.tsx";
import {Fragment} from "preact";

export const LandingPage = () => {
    return (
        <Fragment>
            <WorkTimeline/>
            <GitGallery/>
            <BlogList/>
        </Fragment>
    );
};