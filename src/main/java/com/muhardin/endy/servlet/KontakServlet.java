package com.muhardin.endy.servlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.io.PrintWriter;

import javax.sql.DataSource;
import java.sql.*;
import javax.naming.*;

public class KontakServlet extends HttpServlet {
    private Connection conn;
    public KontakServlet(){
        try {
            Context initContext = new InitialContext();
            Context envContext  = (Context)initContext.lookup("java:/comp/env");
            DataSource ds = (DataSource) envContext.lookup("jdbc/belajarDB");
            conn = ds.getConnection();
        } catch (Exception err){
            err.printStackTrace();
        }
    }

	public void doGet(HttpServletRequest req, HttpServletResponse res) {
		try {

			ResultSet rs = conn.createStatement()
			                .executeQuery("select count(*) from kontak");
			rs.next();
			Long jumlahRecord = rs.getLong(1);
			
			res.setContentType("text/html");
			
			String output = "<html><head><title>Test Akses Database</title></head>";
			output += "<body>Jumlah Record : "+jumlahRecord+"</body></html>";
			
			res.getWriter().print(output);
            res.getWriter().flush();
		} catch (Exception err){
			err.printStackTrace();
		}
	}
}
