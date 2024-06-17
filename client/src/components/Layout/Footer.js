import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "@mui/material";


const Footer = () => {
    return (
        <div className="text-light p-4">
            <div className="text-center">
            <span class="mb-3 mb-md-0 text-body-secondary">© 2024 KunalBhamoriya - </span>
            <Link href="https://github.com/KunalBhamoriya" target="_blank" className="mx-3" >
                <GitHubIcon fontSize="large" style={{color : 'black'}}/>
            </Link>
            <Link href="https://www.linkedin.com/in/kunal-bhamoriya/" target="_blank" className="mx-3" >
                <LinkedInIcon fontSize="large" style={{color : 'black'}}/>
            </Link>
            </div>
        </div>
    );
};

export default Footer