package com.muhardin.endy.servlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.io.PrintWriter;

public class HaloServlet extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse resp) {
		try {

			Date sekarang = new Date();
			resp.setContentType("application/json");
			PrintWriter output = resp.getWriter();
			output.print("{\"tanggal\":\""+sekarang.toString()+"\"}");
			output.flush();
			output.close();

		} catch (Exception err){
			err.printStackTrace();
		}
	}
}