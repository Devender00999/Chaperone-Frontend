import { createSelector, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { apiCallBegan } from "./api";

const slice = createSlice({
   name: "academics",
   initialState: {
      allSubjects: [],
      selectedSubject: null,
      semesters: [],
      branches: [],
      loading: false,
      error: null,
   },

   reducers: {
      branchReceived: (state, action) => {
         state.branches = action.payload;
         state.error = null;
         state.loading = false;
      },

      semestersReceived: (state, action) => {
         state.semesters = action.payload;
         state.error = null;
         state.loading = false;
      },

      subjectRequested: (state, action) => {
         state.loading = true;
         state.error = null;
      },
      subjectRequestFailed: (state, action) => {
         state.loading = false;
         state.error = action.payload.message;
      },
      subjectsReceived: (state, action) => {
         state.allSubjects = action.payload;
         state.loading = false;
         state.success = true;
         state.error = null;
      },

      subjectReceived: (state, action) => {
         state.selectedSubject = action.payload;
         state.loading = false;
         state.success = true;
         state.error = null;
      },
      subjectAdded: (state, action) => {
         state.allSubjects.push(action.payload);
         state.loading = false;
         state.error = null;
      },

      subjectRemoved: (state, action) => {
         state.allSubjects = state.allSubjects.filter(
            (subject) => subject._id !== action.payload._id
         );

         if (action.payload) toast.success("Subject Removed Succcessfully.");
         state.loading = false;
         state.error = null;
         state.success = true;
      },

      subjectUpdated: (state, action) => {
         state.allSubjects.map((subject) => {
            if (action.payload._id === subject._id) return action.payload;
            return subject;
         });
         state.loading = false;
         state.error = null;
      },

      topicAdded: (state, action) => {
         state.selectedSubject.topics.push(action.payload);

         // Adding new topic to subject list
         state.allSubjects = state.allSubjects.map((sub) =>
            sub._id === action.payload.subjectId
               ? sub.topics.push(action.payload)
               : sub
         );

         state.loading = false;
         state.error = null;
      },
      topicRemoved: (state, action) => {
         // Removing topic from selected subjects
         console.log(action.payload);
         state.selectedSubject.topics = state.selectedSubject.topics.filter(
            (topic) => topic._id !== action.payload._id
         );

         const index = state.allSubjects.findIndex(
            (sub) => sub._id === action.payload.subjectId
         );

         // Removed deleted item from All Subjects
         if (index >= 0)
            state.allSubjects[index] = state.allSubjects[index].topics.filter(
               (topic) => topic._id !== action.payload._id
            );

         state.loading = false;
         state.error = null;
      },
   },
});

const {
   branchReceived,
   semestersReceived,
   subjectAdded,
   subjectRequested,
   subjectRequestFailed,
   subjectReceived,
   subjectsReceived,
   subjectRemoved,
   subjectUpdated,
   topicAdded,
   topicRemoved,
} = slice.actions;

// url
const academics = "/academics";

// action creator for creating a topic in a subject
export const addTopic = (subjectId, topic) =>
   apiCallBegan({
      url: academics + "/" + subjectId + "/topics",
      method: "post",
      data: topic,
      onStart: subjectRequested.type,
      onSuccess: topicAdded.type,
      onError: subjectRequestFailed.type,
   });

// action creator to get filtered articles
export const filterSubjects = (query) =>
   createSelector(
      (state) => state.academics.allSubjects,
      (allSubjects) =>
         allSubjects.filter((subject) => {
            console.log(query);
            return subject.subName.toLowerCase().includes(query.toLowerCase());
         })
   );

// action create to delete a topic
export const removeTopic = (subjectId, id) =>
   apiCallBegan({
      url: academics + "/" + subjectId + "/topics/" + id,
      method: "delete",
      onStart: subjectRequested.type,
      onSuccess: topicRemoved.type,
      onError: subjectRequestFailed.type,
   });

// action creator for getting branches
export const loadBranches = () =>
   apiCallBegan({
      url: "/branches",
      onStart: subjectRequested.type,
      onSuccess: branchReceived.type,
      onError: subjectRequestFailed.type,
   });

// action creator for getting semesters
export const loadSemesters = () =>
   apiCallBegan({
      url: "/semesters",
      onStart: subjectRequested.type,
      onSuccess: semestersReceived.type,
      onError: subjectRequestFailed.type,
   });

// action creator to load a subject
export const loadSubject = (id) => {
   return apiCallBegan({
      url: academics + "/" + id,
      onStart: subjectRequested.type,
      onSuccess: subjectReceived.type,
      onError: subjectRequestFailed.type,
   });
};

// action create to delete a subject
export const removeSubject = (id) =>
   apiCallBegan({
      url: academics + "/" + id,
      method: "delete",
      onStart: subjectRequested.type,
      onSuccess: subjectRemoved.type,
      onError: subjectRequestFailed.type,
   });

// action creator to load all subjects
export const loadAllSubjects = () =>
   apiCallBegan({
      url: academics,
      onStart: subjectRequested.type,
      onSuccess: subjectsReceived.type,
      onError: subjectRequestFailed.type,
   });

// action creator for adding a subject
export const addSubject = (subject) =>
   apiCallBegan({
      url: academics,
      method: "post",
      data: subject,
      onStart: subjectRequested.type,
      onSucess: subjectAdded.type,
      onError: subjectRequestFailed.type,
   });

// action creator for adding a subject
export const updateSubject = (id, subject) =>
   apiCallBegan({
      url: academics + "/" + id,
      method: "patch",
      data: subject,
      onStart: subjectRequested.type,
      onSucess: subjectUpdated.type,
      onError: subjectRequestFailed.type,
   });

export default slice.reducer;
