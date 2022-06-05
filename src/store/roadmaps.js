import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { apiCallBegan } from "./api";

const slice = createSlice({
   name: "easybuy",
   initialState: {
      allRoadmaps: [],
      selectedRoadmap: null,
      selectedArticle: null,
      selectedProject: null,
      loading: false,
      error: null,
   },
   reducers: {
      errorCleaned: (state, action) => {
         state.error = null;
      },
      roadmapRequested: (state, action) => {
         state.loading = true;
         state.error = null;
      },
      roadmapRequestFailed: (state, action) => {
         state.loading = false;
         state.error = action.payload.message;
      },
      roadmapsReceived: (state, action) => {
         state.allRoadmaps = action.payload;
         state.loading = false;
         state.error = null;
      },
      roadmapAdded: (state, action) => {
         state.allRoadmaps.push(action.payload);
         state.loading = false;
         state.error = null;
         toast.success("Roadmap category added successfully.");
      },
      roadmapRemoved: (state, action) => {
         state.loading = false;
         state.error = null;
         state.allRoadmaps = state.allRoadmaps.filter(
            (roadmap) => roadmap._id !== action.payload._id
         );
         toast.success("Roadmap category deleted successfully.");
      },
      roadmapUpdated: (state, action) => {
         const index = state.allRoadmaps.findIndex(
            (roadmap) => roadmap._id === action.payload._id
         );
         state.selectedRoadmap = action.payload;
         state.allRoadmaps[index] = action.payload;
         state.loading = false;
         state.error = null;
         toast.success("Roadmap category updated successfully.");
      },
      roadmapSelected: (state, action) => {
         state.selectedRoadmap = action.payload;
         state.loading = false;
         state.error = null;
      },

      articleSelected: (state, action) => {
         state.selectedArticle = action.payload.article;
         state.loading = false;
         state.error = null;
      },
      articleAdded: (state, action) => {
         const index = state.allRoadmaps.findIndex(
            (roadmap) => roadmap._id === action.payload.roadmapId
         );
         state.allRoadmaps[index].articles.push(action.payload.article);
         state.loading = false;
         state.error = null;
         toast.success("Roadmap added successfully.");
      },
      articleRemoved: (state, action) => {
         const index = state.allRoadmaps.findIndex(
            (roadmap) => roadmap._id === action.payload.roadmapId
         );
         state.allRoadmaps[index].articles = state.allRoadmaps[
            index
         ].articles.filter(
            (article) => article._id !== action.payload.article._id
         );
         state.loading = false;
         state.error = null;
         toast.success("Roadmap deleted successfully.");
      },
      articleEdited: (state, action) => {
         const index = state.allRoadmaps.findIndex(
            (roadmap) => roadmap._id === action.payload.roadmapId
         );
         if (index !== -1) {
            const idx = state.allRoadmaps[index].articles.findIndex(
               (article) => article._id === action.payload.article._id
            );
            state.allRoadmaps[index].articles[idx] = action.payload.article;
         }

         state.loading = false;
         state.error = null;
         toast.success("Roadmap updated successfully.");
      },

      projectSelected: (state, action) => {
         state.selectedProject = action.payload.project;
         state.loading = false;
         state.error = null;
      },
      projectAdded: (state, action) => {
         const index = state.allRoadmaps.findIndex(
            (roadmap) => roadmap._id === action.payload.roadmapId
         );
         state.allRoadmaps[index].projects.push(action.payload.project);
         state.loading = false;
         state.error = null;
         toast.success("Project added successfully.");
      },

      projectEdited: (state, action) => {
         const index = state.allRoadmaps.findIndex(
            (roadmap) => roadmap._id === action.payload.roadmapId
         );
         if (index !== -1) {
            const idx = state.allRoadmaps[index].projects.findIndex(
               (project) => project._id === action.payload.project._id
            );
            state.allRoadmaps[index].projects[idx] = action.payload.project;
         }
         state.selectedProject = action.payload.project;
         state.loading = false;
         state.error = null;
         toast.success("Roadmap updated successfully.");
      },

      projectRemoved: (state, action) => {
         const index = state.allRoadmaps.findIndex(
            (roadmap) => roadmap._id === action.payload.roadmapId
         );
         state.allRoadmaps[index].projects = state.allRoadmaps[
            index
         ].projects.filter(
            (project) => project._id !== action.payload.project._id
         );
         state.loading = false;
         state.error = null;
         toast.success("Roadmap deleted successfully.");
      },
   },
});

// const findIndex = (state, action) => {
//    return state.allRoadmaps.findIndex(
//       (roadmap) => roadmap._id === action.payload.roadmapId
//    );
// };

const {
   roadmapsReceived,
   roadmapRequestFailed,
   roadmapRequested,
   errorCleaned,

   roadmapAdded,
   roadmapRemoved,
   roadmapUpdated,
   roadmapSelected,

   articleAdded,
   articleEdited,
   articleRemoved,
   articleSelected,

   projectAdded,
   projectEdited,
   projectRemoved,
   projectSelected,
} = slice.actions;

export default slice.reducer;

// url
const url = "/roadmaps";

// action creator for getting all roadmaps
export const loadRoadmaps = () =>
   apiCallBegan({
      url,
      onStart: roadmapRequested.type,
      onError: roadmapRequestFailed.type,
      onSuccess: roadmapsReceived.type,
   });

// action creator for adding a roadmap
export const addRoadmap = (roadmap) =>
   apiCallBegan({
      url,
      method: "post",
      data: roadmap,
      onStart: roadmapRequested.type,
      onError: roadmapRequestFailed.type,
      onSuccess: roadmapAdded.type,
   });

// action creator for adding a roadmap
export const removeRoadmap = (id) =>
   apiCallBegan({
      url: url + "/" + id,
      method: "delete",
      onStart: roadmapRequested.type,
      onError: roadmapRequestFailed.type,
      onSuccess: roadmapRemoved.type,
   });

// action creator to edit roadmap
export const editRoadmap = (id, data) => (dispatch) => {
   dispatch(
      apiCallBegan({
         url: url + "/" + id,
         data,
         onSuccess: roadmapUpdated.type,
         method: "patch",
         onStart: roadmapRequested.type,
         onError: roadmapRequestFailed.type,
      })
   );
};

// action creator for selecting article
export const selectRoadmap = (id) => (dispatch, getState) => {
   if (!id) return dispatch(roadmapSelected(null));
   const { allRoadmaps } = getState().roadmaps;
   const roadmap = allRoadmaps.find((roadmap) => roadmap._id === id);
   if (roadmap) return dispatch(roadmapSelected(roadmap));

   dispatch(
      apiCallBegan({
         url: url + "/" + id,
         onStart: roadmapRequested.type,
         onError: roadmapRequestFailed.type,
         onSuccess: roadmapSelected.type,
      })
   );
};

// action creator for selecting article
export const selectArticle = (roadmapId, articleId) => (dispatch, getState) => {
   if (!articleId || !roadmapId) return dispatch(articleSelected(null));
   const { allRoadmaps } = getState().roadmaps;
   const roadmap = allRoadmaps.find((roadmap) => roadmap._id === roadmapId);
   if (roadmap) {
      const article = roadmap.articles.find(
         (article) => article._id === articleId
      );
      if (article) return dispatch(articleSelected({ article }));
   }
   dispatch(
      apiCallBegan({
         url: url + "/" + roadmapId + "/articles/" + articleId,
         onStart: roadmapRequested.type,
         onError: roadmapRequestFailed.type,
         onSuccess: articleSelected.type,
      })
   );
};

// action creator for adding article
export const addArticle = (roadmapId, article) =>
   apiCallBegan({
      url: url + "/" + roadmapId + "/articles/",
      method: "post",
      data: article,
      onStart: roadmapRequested.type,
      onError: roadmapRequestFailed.type,
      onSuccess: articleAdded.type,
   });

// action creator for remove article
export const removeArticle = (roadmapId, articleId) =>
   apiCallBegan({
      url: url + "/" + roadmapId + "/articles/" + articleId,
      method: "delete",
      onStart: roadmapRequested.type,
      onError: roadmapRequestFailed.type,
      onSuccess: articleRemoved.type,
   });

// action creator for remove article
export const editArticle = (roadmapId, articleId, data) =>
   apiCallBegan({
      url: url + "/" + roadmapId + "/articles/" + articleId,
      method: "patch",
      data,
      onStart: roadmapRequested.type,
      onError: roadmapRequestFailed.type,
      onSuccess: articleEdited.type,
   });

// action creators for projects

// action creator for selecting article
export const selectProject = (roadmapId, projectId) => (dispatch, getState) => {
   if (!projectId || !roadmapId) return dispatch(projectSelected(null));
   const { allRoadmaps } = getState().roadmaps;
   const roadmap = allRoadmaps.find((roadmap) => roadmap._id === roadmapId);
   if (roadmap) {
      const project = roadmap.projects.find(
         (project) => project._id === projectId
      );
      if (project) return dispatch(projectSelected({ project, roadmapId }));
   }
   dispatch(
      apiCallBegan({
         url: url + "/" + roadmapId + "/projects/" + projectId,
         onStart: roadmapRequested.type,
         onError: roadmapRequestFailed.type,
         onSuccess: projectSelected.type,
      })
   );
};

// action creator for adding a project
export const addProject = (roadmapId, project) =>
   apiCallBegan({
      url: url + "/" + roadmapId + "/projects/",
      method: "post",
      data: project,
      onStart: roadmapRequested.type,
      onError: roadmapRequestFailed.type,
      onSuccess: projectAdded.type,
   });

export const removeProject = (roadmapId, projectId) =>
   apiCallBegan({
      url: url + "/" + roadmapId + "/projects/" + projectId,
      method: "delete",
      onStart: roadmapRequested.type,
      onError: roadmapRequestFailed.type,
      onSuccess: projectRemoved.type,
   });

export const editProject = (roadmapId, projectId, data) =>
   apiCallBegan({
      url: url + "/" + roadmapId + "/projects/" + projectId,
      method: "patch",
      data,
      onStart: roadmapRequested.type,
      onError: roadmapRequestFailed.type,
      onSuccess: projectEdited.type,
   });

export const cleanError = () => errorCleaned({});
