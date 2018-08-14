/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');



function subscribe(){
  var problems = ["tired eyes", 
                  "dirty socks", 
                  "dead plants", 
                  "loud neighbors", 
                  "broken remote control", 
                  "empty refrigerator", 
                  "broken juul", 
                  "lonely heart", 
                 "lactose intolerance", 
                 "empty bank account",
                 "empty keurig pods", 
                  "social anxiety", 
                 "fear of bats", "broken scooter", "ugly toenails"]
  
  var solutions = ["a plant", 
                   "clean socks", 
                   "a few mannequins recovered from your hometown mall's dumpster", 
                   "beans", 
                   "VR glasses", 
                   "gauchos", 
                   "pixie sticks", 
                   "a hotdog (no bun or relish)", 
                  "tostitos with a hint of lime", 
                  "fingerless gloves", 
                  "a booklet of Dermot Mulroney headshots", 
                  "an ant farm", 
                  "melted ice", 
                  "bees?",
                   "more empty keurig pods", 
                   "avocados", 
                  "a lint roller", 
                  "pickle juice",
                   "curated Go-Gurt subscription",
                  "a copy of Kylie and Kendall Jenner's 2014 sci-fi novel Rebels: City of Indra", "rocks"]
  var randomizer = Math.floor(Math.random()*problems.length);
    var randomizer2 = Math.floor(Math.random()*solutions.length);

  var prob = problems[randomizer]
  var sols = solutions[randomizer2]
  
  var prob1 = prob.italics();
  var sols1 = sols.italics();
  document.getElementById("idea").innerHTML = "Forget your " + prob1 + ". Sign up with us and get " + sols1 + 
      " delivered to your home once a week for the rest of your life!";
}
