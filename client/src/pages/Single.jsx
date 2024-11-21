import React, { useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import DOMPurify from "dompurify";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />    
          <div className="user">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <div className="info">
              <span>John</span>
              <p>Posted two days ago</p>
            </div>
            <div className="edit">
              <Link to={'/write?edit=2'}>
                <img src={Edit} alt="" />
              </Link>
              <Link to={'Delete'}>
                <img src={Delete} alt="" />
              </Link>
            </div>
          </div>
        <h1>My First Blog</h1>
        <p>
          dakfalkfldkla kdlfklkaldkflkalkf
        </p>
      </div>
      <Menu/>
    </div>
  )
};

export default Single;
