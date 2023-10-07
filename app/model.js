var MODEL = (function() {
    var _homeContent = `<section class="BreakfastNook">
    <div class="callout">
      <div class="quote">Home of the World's Greatest Pancakes</div>
    </div>
    </section>
    <h1 class="titleofcompany">
    Welcome to <span class="italics">The Breakfast Nook</span>
    </h1>
    <div class="containerhome">
    <div class="leftpara">
      <section class="titleofpara">What Is There to Offer?</section>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
        repellendus repellat cumque, harum ab, at cum aliquid architecto
        doloremque molestiae vitae consectetur minus beatae suscipit sed
        illum nemo magnam facilis.Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Corrupti repellendus repellat cumque, harum ab, at
        cum aliquid architecto doloremque molestiae vitae consectetur minus
        beatae suscipit sed illum nemo magnam facilis.Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Corrupti repellendus repellat
        cumque, harum ab, at cum aliquid architecto doloremque molestiae
        vitae consectetur minus beatae suscipit sed illum nemo magnam
        facilis.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Corrupti repellendus repellat cumque, harum ab, at cum aliquid
        architecto doloremque molestiae vitae consectetur minus beatae
        suscipit sed illum nemo magnam facilis.
      </p>
    </div>
    <div class="rightimage">
      <section class="Breakfast"></section>
    </div>
    </div>
    <div class="containerhome2">
    <div class="leftpara">
      <section class="titleofpara">What Are We Known For?</section>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
        repellendus repellat cumque, harum ab, at cum aliquid architecto
        doloremque molestiae vitae consectetur minus beatae suscipit sed
        illum nemo magnam facilis.Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Corrupti repellendus repellat cumque, harum ab, at
        cum aliquid architecto doloremque molestiae vitae consectetur minus
        beatae suscipit sed illum nemo magnam facilis.Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Corrupti repellendus repellat
        cumque, harum ab, at cum aliquid architecto doloremque molestiae
        vitae consectetur minus beatae suscipit sed illum nemo magnam
        facilis.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Corrupti repellendus repellat cumque, harum ab, at cum aliquid
        architecto doloremque molestiae vitae consectetur minus beatae
        suscipit sed illum nemo magnam facilis.
      </p>
    </div>
    <div class="rightimage">
      <section class="Sandwiches"></section>
    </div>
    </div>
    <div class="containerhome3">
    <div class="clienttestimonials">
      <div class="titleofclient">Client Testimonials</div>
      <section class="nameone">
        Katelina Fish
        <p class="para1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          repellendus repellat cumque, harum ab, at cum aliquid architecto
          doloremque molestiae vitae consectetur minus beatae suscipit sed
          illum nemo magnam facilis.Lorem ipsum dolor, sit amet consectetur
          adipisicing elit.
        </p>
      </section>
      <section class="nametwo">
        Catherine Castanza
        <p class="para2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          repellendus repellat cumque, harum ab, at cum aliquid architecto
          doloremque molestiae vitae consectetur minus beatae suscipit sed
          illum nemo magnam facilis.Lorem ipsum dolor, sit amet consectetur
          adipisicing elit.
        </p>
      </section>
      <section class="namethree">
        Jeremy Ross
        <p class="para3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          repellendus repellat cumque, harum ab, at cum aliquid architecto
          doloremque molestiae vitae consectetur minus beatae suscipit sed
          illum nemo magnam facilis.Lorem ipsum dolor, sit amet consectetur
          adipisicing elit.
        </p>
      </section>
    </div>
    </div>
    <div class="cateringservices">
    <section class="callout2">
      <div class="cateringservicestitle">We Now Offer Catering!</div>
      <input class="explorebutton" type="submit" value="Explore Options" />
    </section>
    </div>
    <section class="footer">
    <div class="copyrighttitle">The Breakfast Nook</div>
    <div class="copyright">©Copyright 2023</div>
    </section>`;
    var _aboutContent = ` <section class="aboutimage">
    <section class="BreakfastNook">
      <div class="callout">
        <div class="quote">
          The Origins of <span class="italics2">The Breakfast Nook</span>
        </div>
      </div>
    </section>
    </section>
    <div class="containerabout">
    <div class="leftpara1">
      <div class="titleofpara1">About the Owner</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        perspiciatis iste alias aut, vero magni libero suscipit vel, minus
        deleniti quo culpa obcaecati animi doloribus sapiente at, tenetur
        reiciendis dolores!Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Aspernatur perspiciatis iste alias aut, vero magni
        libero suscipit vel, minus deleniti quo culpa obcaecati animi
        doloribus sapiente at, tenetur reiciendis dolores!
      </p>
    
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        perspiciatis iste alias aut, vero magni libero suscipit vel, minus
        deleniti quo culpa obcaecati animi doloribus sapiente at, tenetur
        reiciendis dolores!Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Aspernatur perspiciatis iste alias aut, vero magni
        libero suscipit vel, minus deleniti quo culpa obcaecati animi
        doloribus sapiente at, tenetur reiciendis dolores!
      </p>
    </div>
    <div class="rightimage1">
      <div class="Owner"></div>
    </div>
    </div>
    <div class="containerabout2">
    <div class="leftpara2">
      <div class="titleofpara2">About the Restaurant</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        perspiciatis iste alias aut, vero magni libero suscipit vel, minus
        deleniti quo culpa obcaecati animi doloribus sapiente at, tenetur
        reiciendis dolores!Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Aspernatur perspiciatis iste alias aut, vero magni
        libero suscipit vel, minus deleniti quo culpa obcaecati animi
        doloribus sapiente at, tenetur reiciendis dolores!
      </p>
    
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        perspiciatis iste alias aut, vero magni libero suscipit vel, minus
        deleniti quo culpa obcaecati animi doloribus sapiente at, tenetur
        reiciendis dolores!Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Aspernatur perspiciatis iste alias aut, vero magni
        libero suscipit vel, minus deleniti quo culpa obcaecati animi
        doloribus sapiente at, tenetur reiciendis dolores!
      </p>
    </div>
    <div class="rightimage2">
      <div class="Restaurant"></div>
    </div>
    </div>
    <section class="ourpromise">
    <div class="ourpromisetitle">Our Promise:</div>
    <p class="promisepara">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quidem
      inventore assumenda natus nesciunt corrupti fugiat quis! Quis nobis,
      magni eligendi asperiores iure quam fuga magnam! Doloremque adipisci
      aliquam eaque.
    </p>
    </section>
    <section class="footer">
    <div class="copyrighttitle">The Breakfast Nook</div>
    <div class="copyright">©Copyright 2023</div>
    </section>`;
    var _menuContent = ` <section class="menuimagetop">
            <section class="BreakfastNook">
              <div class="callout">
                <div class="quote">
                  <span class="italics2">Specials for the Day</span>
                </div>
              </div>
            </section>
          </section>
          <div class="containermenu">
            <div class="leftpara3">
              <div class="titleofpara3">Homemade Pancakes</div>
              <p class="leftparaedit">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                iure explicabo tenetur similique mollitia repudiandae molestiae,
                impedit nisi vero beatae praesentium dolorem ea laudantium,
                corporis, quas accusantium eum ut suscipit?
              </p>
              <p class="leftparaedit">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                iure explicabo tenetur similique mollitia repudiandae molestiae,
                impedit nisi vero beatae praesentium dolorem ea laudantium,
                corporis, quas accusantium eum ut suscipit?
              </p>
            </div>
            <div class="rightimage3"><section class="Pancakes"></section></div>
          </div>
          <div class="containermenu1">
            <div class="leftpara3">
              <div class="titleofpara3">Homemade Waffles</div>
              <p class="leftparaedit">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                iure explicabo tenetur similique mollitia repudiandae molestiae,
                impedit nisi vero beatae praesentium dolorem ea laudantium,
                corporis, quas accusantium eum ut suscipit?
              </p>
              <p class="leftparaedit">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                iure explicabo tenetur similique mollitia repudiandae molestiae,
                impedit nisi vero beatae praesentium dolorem ea laudantium,
                corporis, quas accusantium eum ut suscipit?
              </p>
            </div>
            <div class="rightimage3"><section class="Waffles"></section></div>
          </div>
          <div class="containermenu2">
            <div class="leftpara3">
              <div class="titleofpara3">Egg Sandwich</div>
              <p class="leftparaedit">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                iure explicabo tenetur similique mollitia repudiandae molestiae,
                impedit nisi vero beatae praesentium dolorem ea laudantium,
                corporis, quas accusantium eum ut suscipit?
              </p>
              <p class="leftparaedit">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                iure explicabo tenetur similique mollitia repudiandae molestiae,
                impedit nisi vero beatae praesentium dolorem ea laudantium,
                corporis, quas accusantium eum ut suscipit?
              </p>
            </div>
            <div class="rightimage3"><section class="EggSandwich"></section></div>
          </div>
          <div class="cateringservices">
          <section class="callout2">
            <div class="cateringservicestitle">Take a Look at the Full Menu!</div>
            <input class="explorebutton" type="submit" value="Explore Options" />
          </section>
        </div>
          <section class="footer">
    <div class="copyrighttitle">The Breakfast Nook</div>
    <div class="copyright">©Copyright 2023</div>
    </section>`;
    var _contactContent = `<section class="menuimagetop">
    <section class="BreakfastNook">
      <div class="callout">
        <div class="quote">
          <span class="italics2">Contact Information</span>
        </div>
      </div>
    </section>
    </section><div class="containercontact">
    <div class="leftpara4">
      <div class="titleofpara4">Phone Number</div>
      <div class="leftparaedit">
        <p>Restuarant:812-777-0000</p>
        <p>Customer Service:812-333-2222</p>
        <p>Catering:812-555-4444</p>
         <p>PickUp:812-222-9999</p>
      </div>
    </div>
    <div class="rightimage4"><section class="Phone"></section></div>
    </div>
    <div class="containercontact1">
    <div class="leftpara5">
      <div class="titleofpara5">Email</div>
      <div class="leftparaedit">
        <p>Restuarant:thebreakfastnook@gmail.com</p> 
        <p>Customer Service:thebreakfastnookcustomerservice@gmail.com</p>
        <p>Catering:thebreakfastnookcatering@gmail</p>
        <p>PickUp:thebreakfastnookpickup@gmail.com</p>
      </div>
    </div>
    <div class="rightimage5"><section class="Email"></section></div>
    </div><section class="footer">
    <div class="copyrighttitle">The Breakfast Nook</div>
    <div class="copyright">©Copyright 2023</div>
    </section>`;

    var _updateView = function(pageName){
        console.log(pageName);
        var pageContent = "_" + pageName;
        $("#app").html(eval(pageContent));
    }

    return{
       updateView: _updateView,
    };

}) ();