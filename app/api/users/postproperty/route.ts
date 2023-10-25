import {connect} from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
require("dotenv").config();

connect()

export async function POST(request: NextRequest){
    try {

        const reqBody = await request.json()
        const {bed,bath,wifi,guests,address,description,phone,email,price} = reqBody;
        console.log(reqBody);

        //check if user exists
        const user = await User.findOne({email})
        user.details = [bed, bath, wifi, guests, address, description, phone, price];
        await user.save();

        const response = NextResponse.json({
            message: "Updating successful",
            success: true,
        })

        return response;

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}