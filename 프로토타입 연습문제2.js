function AnimalMedicalRecord(params) {
  this.animalName = params?.animalName ? params.animalName : "no-data";
  this.animalAge = params?.animalAge ? params.animalAge : "no-data";
  this.animalGender = params?.animalGender ? params.animalGender : "no-data";
  this.lastMedicalDate = null;
}

AnimalMedicalRecord.prototype.saveMedical = function () {
  const saveData = {
    animalName: this.animalName,
    animalAge: this.animalAge,
    animalGender: this.animalGender,
    lastMedicalDate: this.lastMedicalDate,
  };
  console.log("아래의 데이터가 save 되었습니다.");
  console.log(saveData);
};

AnimalMedicalRecord.prototype.getCurrentTime = function () {
  const date = new Date();
  return `${date.getFullYear()}.${
    date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  }.${
    date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
  } ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

AnimalMedicalRecord.prototype.startMedical = function () {
  const startTime = this.getCurrentTime();
  this.lastMedicalDate = startTime;
  console.log(`[${startTime}] 진료가 시작되었습니다.`);
};

function loadData(search) {
  //search...

  if (search === "뽀삐") {
    return {
      animalName: "뽀삐",
      animalAge: 9,
      animalGender: "male",
    };
  } else if (search === "곰이") {
    return {
      animalName: "곰이",
      animalAge: 9,
      animalGender: "male",
    };
  }
}

const client = new AnimalMedicalRecord(loadData("곰이"));
client.startMedical();
client.saveMedical();
