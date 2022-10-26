const express = require("express");

const userController = require("../controllers/user.controller");

const router = express.Router();













router.get("/users", userController.getAllUser);
/**
 * @openapi
 * /api/users:
 *  get:
 *     tags:
 *     - Hero
 *     summary: Get all user
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *       400:
 *         description: Bad request
 */
router.get("/user-by-id/:id", userController.getAllUserById);
router.post("/create-user", userController.createUser);


/**
 * @openapi
 * '/api/create-user':
 *  post:
 *     tags:
 *     - Hero
 *     summary: Create a hero
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - id
 *              - name
 *            properties:
 *              id:
 *                type: number
 *                default: 2
 *              name:
 *                type: string
 *                default: string
 *              userName:
 *                type: string
 *                default: string
 *              email:
 *                type: string
 *                default: string
 *              adress:
 *                type: object
 *                properties:
 *                  street:
 *                    type: string
 *                    default: string
 *                  suit:
 *                    type: string
 *                    default: string
 *                  city:
 *                      type: string
 *                      default: string
 *                  zipcode:
 *                      type: string
 *                      default: string
 *              geo:
 *                  type: object
 *                  properties:
 *                      last:
 *                        type: string
 *                        default: string
 *                      ing:
 *                         type: string
 *                         default: string
 *              phone:
 *                  type: string
 *              website:
 *                  type: string
 *              company:
 *                  type: object
 *                  properties:
 *                      name:
 *                          type: string
 *                      catchPhrases:
 *                          type: string
 *                      bs:
 *                          type: string
 *               
 *              
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */

module.exports = router;