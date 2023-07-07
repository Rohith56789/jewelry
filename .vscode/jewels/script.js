//****************************Tool 1 functioning****************************
function priceCost() {
    var cartlist = parseInt(document.getElementById("cartlist").value);
    var pricein = parseInt(document.getElementById("pricein").value);
    if (cartlist === 24) {
      document.getElementById("result").value = pricein;
    }
    if (cartlist === 22) {
      document.getElementById("result").value = (pricein * 91.6) / 100;
    }
    if (cartlist === 20) {
      document.getElementById("result").value = (pricein * 83.3) / 100;
    }
    if (cartlist === 18) {
      document.getElementById("result").value = (pricein * 75) / 100;
    }
  }
  
  function showLoader(top) {
    document.getElementById("loader").style.display = "block";
    document.getElementById("loader").style.top = top.toString();
  }
  
  //****************************Tool 1 Reset****************************
  function clearFun() {
    document.getElementById("pricein").value = "";
    document.getElementById("result").value = "";
  }
  
  //****************************Tool 2 Functioning****************************
  function priceCost2() {
    var cartlist2 = parseInt(document.getElementById("cartlist2").value);
    var pricein2 = parseInt(document.getElementById("pricein2").value);
  
    var weight = parseInt(document.getElementById("weight").value);
  
    var mkcharge = parseInt(document.getElementById("mkcharge").value);
    const g = 3 / 100;
    var gst = parseInt(
      (document.getElementById("gst").value = (pricein2 * weight + mkcharge) * g)
    );
  
    document.getElementById("finalpgj").value = parseInt(
      pricein2 * weight + mkcharge + gst
    );
  }
  //****************************Tool 2 Reset****************************
  function clearFun2() {
    document.getElementById("pricein2").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("mkcharge").value = "";
    document.getElementById("gst").value = "";
    document.getElementById("finalpgj").value = "";
  }
  
  //****************************Tool 3 Functioning****************************
  function priceCost3() {
    var weight3 = document.getElementById("weight3").value;
    var cartlist3 = document.getElementById("cartlist3").value;
    var ratetoday = document.getElementById("ratetoday").value;
  
    document.getElementById("total3").value =
      (weight3 * cartlist3 * ratetoday) / 24;
  }
  
  //****************************Tool 3 Reset****************************
  function clearFun3() {
    document.getElementById("weight3").value = "";
    document.getElementById("ratetoday").value = "";
    document.getElementById("total3").value = "";
  }
  //****************************Tool 4 Functioning****************************
  function priceCost4() {
    var cartlist4 = parseInt(document.getElementById("cartlist4").value);
    var weight4 = document.getElementById("weight4").value;
  
    var ratetoday4 = document.getElementById("ratetoday4").value;
  
    document.getElementById("total4").value =
      (weight4 * cartlist4 * ratetoday4) / 100;
  }
  
  //****************************Tool 4 Reset****************************
  function clearFun4() {
    document.getElementById("weight4").value = "";
    document.getElementById("ratetoday4").value = "";
    document.getElementById("total4").value = "";
  }
  
  //****************************Table Functioning****************************
  function goldFunction() {
    const epn = document.getElementById("epn").value;
    const purity = document.getElementById("purity").value;
    var gw = parseInt(document.getElementById("gw").value);
    var grg = parseInt(document.getElementById("grg").value);
    var amount = parseInt((document.getElementById("amount").value = gw * grg));
    var table = document.getElementById("goldtable");
  
    var row = table.insertRow(-1);
  
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
  
    cell1.innerHTML = epn.toUpperCase();
  
    cell2.innerHTML = purity + " CARAT";
    cell3.innerHTML = gw + " Grams";
    cell4.innerHTML = grg;
    cell5.innerHTML = amount;
  
    resetFun();
  }
  //**************************** Table Amount Total Auto Calc ****************************
  function amountFun() {
    var gw = parseInt(document.getElementById("gw").value);
    var grg = parseInt(document.getElementById("grg").value);
    var amount = parseInt((document.getElementById("amount").value = gw * grg));
  }
  //**************************** Table input field  auto reset****************************
  function resetFun() {
    document.getElementById("epn").value = "";
    document.getElementById("purity").value = "";
    document.getElementById("gw").value = "";
    document.getElementById("grg").value = "";
    document.getElementById("amount").value = "";
  }
  var myLoad;
  
  function showPage() {
    document.getElementById("loader").style.display = "none";
  }
  function hideLoader() {
    // document.getElementsById("cartlist").style.display = "block";
    myLoad = setTimeout(showPage, 1000);
  }
  
  // function tblButton() {
  //   var epn = document.getElementById("epn");
  //   if (epn === null) {
  //     alert("please fill all the details");
  //   }
  // }
  
  //Navbar
  
  /*
  const collection = document.getElementsByClassName("example");
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = "red";
  }
  */
  function showOrHideCategory(category) {
    // debugger;
    document.getElementById("loader").style.display = "block";
    document.getElementById("loader").style.left = "150%";
    document.getElementById("loader").style.top = "10%";
    var jewelleryCollection = document.getElementsByClassName("jewellery");
    var neclaceCollection = document.getElementsByClassName("neclace");
    var jhumkasCollection = document.getElementsByClassName("jhumkas");
    var banglesCollection = document.getElementsByClassName("bangles");
    for (let i = 0; i < jewelleryCollection.length; i++) {
      jewelleryCollection[i].style.display = "none";
    }
    for (let i = 0; i < neclaceCollection.length; i++) {
      neclaceCollection[i].style.display = "none";
    }
    for (let i = 0; i < jhumkasCollection.length; i++) {
      jhumkasCollection[i].style.display = "none";
    }
    for (let i = 0; i < banglesCollection.length; i++) {
      banglesCollection[i].style.display = "none";
    }
  
    switch (category) {
      case "jewellery":
        for (let i = 0; i < jewelleryCollection.length; i++) {
          jewelleryCollection[i].style.display = "block";
        }
        for (let i = 0; i < neclaceCollection.length; i++) {
          neclaceCollection[i].style.display = "block";
        }
        for (let i = 0; i < jhumkasCollection.length; i++) {
          jhumkasCollection[i].style.display = "block";
        }
        for (let i = 0; i < banglesCollection.length; i++) {
          banglesCollection[i].style.display = "block";
        }
        break;
      case "neclace":
        for (let i = 0; i < neclaceCollection.length; i++) {
          neclaceCollection[i].style.display = "block";
        }
        break;
      case "jhumkas":
        for (let i = 0; i < jhumkasCollection.length; i++) {
          jhumkasCollection[i].style.display = "block";
        }
        break;
      case "bangles":
        for (let i = 0; i < banglesCollection.length; i++) {
          banglesCollection[i].style.display = "block";
        }
        break;
    }
    hideLoader();
  }
  
  // ----------------- dropdown list 3---------------------
  function showDp(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
  
    s2.innerHTML = "";
  
    if (s1.value == "gold") {
      var optionArray = [
        "ring|Ring",
        "neclace|Neclace",
        "bangle|Bangle",
        "bracelet|Bracelet",
        "chain|Chain",
      ];
    }
    if (s1.value == "silver") {
      var optionArray = ["chain|Chain"];
    }
    if (s1.value == "diamond") {
      var optionArray = ["ring|Ring", "neclace|Neclace"];
    }
    if (s1.value == "platinum") {
      var optionArray = ["bangle|Bangle", "bracelet|Bracelet"];
    }
    for (var option in optionArray) {
      var pair = optionArray[option].split("|");
      var newoption = document.createElement("option");
  
      newoption.value = pair[0];
      newoption.innerHTML = pair[1];
      s2.options.add(newoption);
    }
  }
  
  function showDp2(s2, s3) {
    var s2 = document.getElementById(s2);
    var s3 = document.getElementById(s3);
  
    s3.innerHTML = "";
  
    if (s2.value == "ring") {
      var optionArray1 = ["ring gem|Ring Gem", "ring casting|Ring Casting"];
    }
    if (s2.value == "neclace") {
      var optionArray1 = [
        "neclace pachi|Neclace Pachi",
        "neclace plain|Neclace Plain",
      ];
    }
    if (s2.value == "bangle") {
      var optionArray1 = ["bangle uncut|Bangle Uncut", "bangle cz|Bangle CZ"];
    }
    if (s2.value == "bracelet") {
      var optionArray1 = [
        "baby bracelet|Baby Bracelet",
        "fancy bracelet|Fancy Bracelet",
      ];
    }
    if (s2.value == "chain") {
      var optionArray1 = ["baby chain|Baby Chain", "big chain|Big Chain"];
    }
    for (var option in optionArray1) {
      var pair1 = optionArray1[option].split("|");
      var newoption1 = document.createElement("option");
  
      newoption1.value = pair1[0];
      newoption1.innerHTML = pair1[1];
      s3.options.add(newoption1);
    }
  }
  function resetFunDp() {
    document.getElementById("selc2").value = "";
    document.getElementById("selc3").value = "";
  }
  function resetFunDp2() {
    document.getElementById("selc3").value = "";
  }
  
  function dpButton() {
    if (document.getElementById("sgb")) {
      alert("Please Select Groupby");
    }
  }
  
  // ----------------- dropdown list 3 Gold,Silver,Diamond,Platinum---------------------
  function showDp(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
  
    s2.innerHTML = "";
  
    if (s1.value == "gold") {
      var optionArray = [
        "ring|Ring",
        "neclace|Neclace",
        "bangle|Bangle",
        "bracelet|Bracelet",
        "chain|Chain",
      ];
    }
    if (s1.value == "silver") {
      var optionArray = ["chain|Chain"];
    }
    if (s1.value == "diamond") {
      var optionArray = ["ring|Ring", "neclace|Neclace"];
    }
    if (s1.value == "platinum") {
      var optionArray = ["bangle|Bangle", "bracelet|Bracelet"];
    }
    for (var option in optionArray) {
      var pair = optionArray[option].split("|");
      var newoption = document.createElement("option");
  
      newoption.value = pair[0];
      newoption.innerHTML = pair[1];
      s2.options.add(newoption);
    }
  }
  
  function showDp2(s2, s3) {
    var s2 = document.getElementById(s2);
    var s3 = document.getElementById(s3);
  
    s3.innerHTML = "";
  
    if (s2.value == "ring") {
      var optionArray1 = ["ring gem|Ring Gem", "ring casting|Ring Casting"];
    }
    if (s2.value == "neclace") {
      var optionArray1 = [
        "neclace pachi|Neclace Pachi",
        "neclace plain|Neclace Plain",
      ];
    }
    if (s2.value == "bangle") {
      var optionArray1 = ["bangle uncut|Bangle Uncut", "bangle cz|Bangle CZ"];
    }
    if (s2.value == "bracelet") {
      var optionArray1 = [
        "baby bracelet|Baby Bracelet",
        "fancy bracelet|Fancy Bracelet",
      ];
    }
    if (s2.value == "chain") {
      var optionArray1 = ["baby chain|Baby Chain", "big chain|Big Chain"];
    }
    for (var option in optionArray1) {
      var pair1 = optionArray1[option].split("|");
      var newoption1 = document.createElement("option");
  
      newoption1.value = pair1[0];
      newoption1.innerHTML = pair1[1];
      s3.options.add(newoption1);
    }
  }
  function resetFunDp() {
    document.getElementById("selc2").value = "";
    document.getElementById("selc3").value = "";
  }
  function resetFunDp2() {
    document.getElementById("selc3").value = "";
  }
  
  function dpButton() {
    if (document.getElementById("sgb")) {
      alert("Please Select Groupby");
    }
  }
  