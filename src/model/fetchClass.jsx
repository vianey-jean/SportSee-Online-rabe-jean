/**
 * The function fetches data from a server and returns it
 * the class.
 * @param {Number} userId - The id of the current user
 * @param {Object} sessions - user sessions datas
 */


export class DataFetcher {
  constructor() {
    this.mock = process.env.REACT_APP_DEVELOPMENT;
  }

  getMainUserData = async (userId) => {
    let url = `${process.env.REACT_APP_API_URL}+${userId}`;
  
    try {
      if (this.mock) {
        url = `/data/${userId}.json`;
      }
      const response = await fetch(url);
     
      const mainUserData = await response.json();
      
  
      return mainUserData.data;
    } catch (error) {
      //console.log("sorry there's an error :", error);
    }
  }

  getActivitiesUserData = async (userId) => {
    let url = `${process.env.REACT_APP_API_URL}+${userId}/activity`;
  
    try {
      if (this.mock) {
        url = `/data/${userId}/activity.json`;
      }
      const response = await fetch(url);
      // console.log(response);
      const userActivitiesData = await response.json();
      // console.log(userActivitiesData);
      // console.log(userActivitiesData.data);
      return userActivitiesData.data;
    } catch (error) {
      //console.log("sorry there's an error :", error);
    }
  }

  GetUserAverageSessions = async (userId) => {
    let url = `${process.env.REACT_APP_API_URL}+${userId}/average-sessions`;
  
    try {
      if (this.mock) {
        url = `/data/${userId}/averageSession.json`;
      }
      const response = await fetch(url);
      const averageSessionsTimeData = await response.json();
      // console.log(averageSessionsTimeData.data);
      return averageSessionsTimeData.data;
    } catch (error) {
      //console.log("sorry there's an error :", error);
    }
  }

  GetUserPerformances = async (userId) => {
    let url = `${process.env.REACT_APP_API_URL}+${userId}/performance`;
  
    try {
      if (this.mock) {
        url = `/data/${userId}/performance.json`;
      }
      const response = await fetch(url);
      const performancesData = await response.json();
      //console.log(performancesData.data);
      return performancesData.data;
    } catch (error) {
      //console.log("sorry there's an error :", error);
    }
  }

  GetUserScores = async (userId) => {
    let url = `${process.env.REACT_APP_API_URL}+${userId}/performance`;
  
    try {
      if (this.mock) {
        url = `/data/${userId}/performance.json`;
      }
      const response = await fetch(url);
      const performancesData = await response.json();
      //.log(performancesData.data);
      return performancesData.data;
    } catch (error) {
      //console.log("sorry there's an error :", error);
    }
  }
}