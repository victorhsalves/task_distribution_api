"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const TaskController_1 = require("./controllers/TaskController");
const UserController_1 = require("./controllers/UserController");
const AuthController_1 = require("./controllers/AuthController");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/teste/', new TaskController_1.TaskController().test);
router.get('/getTypes', new TaskController_1.TaskController().getTypes);
router.get('/getSquadTasks/:username', new TaskController_1.TaskController().getSquadTasks);
router.get('/tasks/:uf?', new TaskController_1.TaskController().getAll);
router.get('/task/:task_id', new TaskController_1.TaskController().getTask);
router.get('/getUsers', new UserController_1.UserController().getUser);
router.get('/getLoggedUsers', new AuthController_1.AuthController().getLoggedUsers);
router.get('/getMyTasks/:username', new TaskController_1.TaskController().getMyTasks);
router.post('/login', new AuthController_1.AuthController().doLogin);
router.post('/logout', new AuthController_1.AuthController().doLogout);
router.post('/createAssignment', new TaskController_1.TaskController().assingnToUserManually);
router.post('/multiAssignment', new TaskController_1.TaskController().multiAssingment);
router.post('/autoAssignment', new TaskController_1.TaskController().autoAssignment);
router.post('/createUser', new UserController_1.UserController().createUser);
router.post('/setAvailability', new UserController_1.UserController().setAvailability);
router.delete('/deleteAssignment/:assignmentId', new TaskController_1.TaskController().deleteAssignment);
