import AsyncStorage from "@react-native-async-storage/async-storage";

// Assuming you are in an async function or use async/await
export const fetchUserInfo = async () => {
    try {
      const userInfoString = await AsyncStorage.getItem('userInfo');
      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        return userInfo; // Return or use the parsed userInfo
      } else {
        return null; // Handle case where userInfo is not found
      }
    } catch (error) {
      console.error("Failed to load userInfo from AsyncStorage:", error);
      return null; // Handle error appropriately
    }
  };
  