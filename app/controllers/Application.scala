package controllers

import models.User
import play.api._
import play.api.mvc._


object Application extends Controller {

//  val service = new UserListCacheImpl()

  /**
    * This action is used to serve Home page of the application
    *
    * @return
    */
  def index = Action {
  implicit request =>
  Ok (views.html.index ("") )
}

  /**
    * This action is used to handle Ajax request
    *
    * @return
    */
  def ajaxCall = Action {
  implicit request =>
  Ok (views.html.signin () )
}

  def signUpCall = Action {
  implicit request =>
  Ok (views.html.signup () )

}

/*  def profileCall(name: String, fname: String, mname: String, lname: String, password: String, repassword: String) = Action {implicit request =>
        val user = User (name, fname, mname, lname, password, repassword)
        if (service.userExists(user.name) ) {
        service.addUser (user)
        Ok (views.html.profile (user) ).withSession ("connected" -> user.name)
      } else {
        Ok ("UserName Already Exists")
      }

}



  def loginCall(name: String) = Action { implicit request =>

      val userLogin=service.getUser(name)
      println(userLogin.name)
      if (service.checkUser(userLogin.name, userLogin.password)) {

      Ok(views.html.profile(userLogin)).withSession("connected" -> userLogin.name)
    }
      else {
      Ok(views.html.signin()).withNewSession
    }
}

  def logoutCall = Action {
  Ok(views.html.welcome()).withNewSession
}*/

}