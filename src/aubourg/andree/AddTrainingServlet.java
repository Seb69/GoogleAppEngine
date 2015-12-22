package aubourg.andree;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.labs.repackaged.org.json.JSONException;
import com.google.appengine.labs.repackaged.org.json.JSONObject;

@SuppressWarnings("serial")
public class AddTrainingServlet extends HttpServlet  {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub



		String title = req.getParameter("title");
		String description = req.getParameter("description");
		String domaine = req.getParameter("domaine");

		String[] exercicesArray; 
		 exercicesArray = req.getParameterValues("exercices");
		 
		 
		System.out.print( req.getParameterValues("exercices"));
		resp.setContentType("text/plain");
		resp.getWriter().println("OK");

	}

}
