import javascript from "../app/assets/svg/skills/javascript.svg";
import materialui from "../app/assets/svg/skills/materialui.svg";
import postgresql from "../app/assets/svg/skills/postgresql.svg";
import typescript from "../app/assets/svg/skills/typescript.svg";
import bootstrap from "../app/assets/svg/skills/bootstrap.svg";
import cplusplus from "../app/assets/svg/skills/cplusplus.svg";
import wordpress from "../app/assets/svg/skills/wordpress.svg";
import firebase from "../app/assets/svg/skills/firebase.svg";
import markdown from "../app/assets/svg/skills/markdown.svg";
import minimajs from "../app/assets/svg/skills/javascript.svg"; // Using javascript icon for Minima.js
import reactnative from "../app/assets/svg/skills/react.svg"; // Using react icon for react native
import githubActions from "../app/assets/svg/skills/GitHub Actions.svg";
import tailwindcss from "../app/assets/svg/skills/Tailwind CSS.svg";
import kubernetes from "../app/assets/svg/skills/kubernetes.svg";
import objectionjs from "../app/assets/svg/skills/objection.svg";
import tailwind from "../app/assets/svg/skills/tailwind.svg";
import expressjs from "../app/assets/svg/skills/Express.svg";
import graphql from "../app/assets/svg/skills/graphql.svg";
import mongoDB from "../app/assets/svg/skills/mongoDB.svg";
import fastapi from "../app/assets/svg/skills/fastapi.svg";
import postman from "../app/assets/svg/skills/Postman.svg";
import typeorm from "../app/assets/svg/skills/typeorm.svg";
import nestjs from "../app/assets/svg/skills/Nest.js.svg";
import docker from "../app/assets/svg/skills/docker.svg";
import nextJS from "../app/assets/svg/skills/nextJS.svg";
import prisma from "../app/assets/svg/skills/prisma.svg";
import python from "../app/assets/svg/skills/python.svg";
import vitejs from "../app/assets/svg/skills/vitejs.svg";
import nodejs from "../app/assets/svg/skills/nodejs.svg";
import knex from "../app/assets/svg/skills/Knex.js.svg";
import azure from "../app/assets/svg/skills/azure.svg";
import canva from "../app/assets/svg/skills/canva.svg";
import figma from "../app/assets/svg/skills/figma.svg";
import mysql from "../app/assets/svg/skills/mysql.svg";
import nginx from "../app/assets/svg/skills/nginx.svg";
import react from "../app/assets/svg/skills/react.svg";
import linux from "../app/assets/svg/skills/linux.svg";
import redis from "../app/assets/svg/skills/Redis.svg";
import deno from "../app/assets/svg/skills/deno.svg";
import haxe from "../app/assets/svg/skills/haxe.svg";
import html from "../app/assets/svg/skills/html.svg";
import aws from "../app/assets/svg/skills/aws.svg";
import css from "../app/assets/svg/skills/css.svg";
import gcp from "../app/assets/svg/skills/gcp.svg";
import git from "../app/assets/svg/skills/git.svg";
import c from "../app/assets/svg/skills/c.svg";

// Define type for skill images
type SkillImageType = typeof gcp; // Using gcp as a representative type for SVG imports

export const skillsImage = (skill: string): SkillImageType | undefined => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "gcp":
      return gcp;
    case "html":
      return html;
    case "docker":
      return docker;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "nextjs":
      return nextJS;
      case "expressjs":
      return expressjs;
    case "reactjs":
      return react;
    case "typescript":
      return typescript;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "c":
      return c;
    case "c++":
      return cplusplus;
    case "prisma":
      return prisma;
    case "python":
      return python;
    case "aws":
      return aws;
    case "deno":
      return deno;
    case "firebase":
      return firebase;
    case "git":
      return git;
    case "graphql":
      return graphql;
    case "materialui":
      return materialui;
    case "nginx":
      return nginx;
    case "wordpress":
      return wordpress;
    case "azure":
      return azure;
    case "figma":
      return figma;
    case "haxe":
      return haxe;
    case "markdown":
      return markdown;
    case "canva":
      return canva;
    case "kubernetes":
      return kubernetes;
    case "linux":
      return linux;
    case "fastapi":
      return fastapi;
    case "nodejs":
      return nodejs;
    case "redis":
      return redis;
    case "postman":
      return postman;
    case "nestjs":
      return nestjs;
    case "bullmq":
      return redis; // Using Redis icon for BullMQ since they're related
    case "knex.js":
      return knex;
    case "github actions":
      return githubActions;
    case "tailwind css":
      return tailwindcss;
    case "react native":
      return reactnative;
    case "minima.js":
      return minimajs;
    case "typeorm":
      return typeorm; // Using postgresql icon for TypeORM
    case "objection.js":
      return objectionjs; // Using postgresql icon for Objection.js
    default:
      return javascript;
  }
};