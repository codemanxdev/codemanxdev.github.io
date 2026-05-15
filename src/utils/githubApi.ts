const username: string = import.meta.env.VITE_GITHUB_USERNAME;
const token: string = import.meta.env.VITE_GITHUB_TOKEN;

if (!username) throw new Error("Missing VITE_GITHUB_USERNAME");
if (!token) throw new Error("Missing VITE_GITHUB_TOKEN");

//Using static payload for now, since the github auth token is flagged as a security risk after deployment.
const payload = {
  data: {
    user: {
      login: "codemanxdev",
      name: "Codeman XDev",
      bio: "",
      followers: {
        totalCount: 23,
      },
      repositories: {
        totalCount: 44,
        nodes: [
          {
            name: "nitnem",
            description:
              "Nitnem (ਨਿਤਨੇਮ) means Daily Naam is a collaboration of different banis that were designated to be read by Sikhs on daily basis.",
            url: "https://github.com/codemanxdev/nitnem",
            stargazerCount: 3,
            forkCount: 0,
            primaryLanguage: {
              name: "Dart",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 170,
                },
              },
            },
          },
          {
            name: "flutter_stateful_vs_stateless",
            description: "Flutter Stateful vs Stateless Widgets",
            url: "https://github.com/codemanxdev/flutter_stateful_vs_stateless",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "Dart",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 14,
                },
              },
            },
          },
          {
            name: "social",
            description: "Social Media Icons",
            url: "https://github.com/codemanxdev/social",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: null,
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 1,
                },
              },
            },
          },
          {
            name: "flutter_sharedprefs",
            description: "Flutter Shared Preferences",
            url: "https://github.com/codemanxdev/flutter_sharedprefs",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "Dart",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 8,
                },
              },
            },
          },
          {
            name: "flutter_customfont",
            description: "Custom Fonts in Flutter",
            url: "https://github.com/codemanxdev/flutter_customfont",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "Dart",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 5,
                },
              },
            },
          },
          {
            name: "geekymon2.blog.github.io",
            description: "My Website",
            url: "https://github.com/codemanxdev/geekymon2.blog.github.io",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "HTML",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 10,
                },
              },
            },
          },
          {
            name: "flutter_redux",
            description: null,
            url: "https://github.com/codemanxdev/flutter_redux",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "Dart",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 12,
                },
              },
            },
          },
          {
            name: "carmarketplace",
            description:
              "carmarketplace app demonstrates a spring boot microservices app with everything you need to run it in PRODUCTION.",
            url: "https://github.com/codemanxdev/carmarketplace",
            stargazerCount: 10,
            forkCount: 6,
            primaryLanguage: {
              name: "Java",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 280,
                },
              },
            },
          },
          {
            name: "CarFinder",
            description: "CarFinder - Rest API for a listing of cars",
            url: "https://github.com/codemanxdev/CarFinder",
            stargazerCount: 2,
            forkCount: 2,
            primaryLanguage: {
              name: "C#",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 184,
                },
              },
            },
          },
          {
            name: "codemanxdev.github.io",
            description: "GitHub Profile",
            url: "https://github.com/codemanxdev/codemanxdev.github.io",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "TypeScript",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 100,
                },
              },
            },
          },
          {
            name: "ToyRobot",
            description: "ToyRobot",
            url: "https://github.com/codemanxdev/ToyRobot",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "C#",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 3,
                },
              },
            },
          },
          {
            name: "KnockKnock",
            description: "Knock Knock",
            url: "https://github.com/codemanxdev/KnockKnock",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "Java",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 2,
                },
              },
            },
          },
          {
            name: "NUnitTest",
            description: "NUnitTest",
            url: "https://github.com/codemanxdev/NUnitTest",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "C#",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 2,
                },
              },
            },
          },
          {
            name: "carmarketplace-config",
            description: "Configuration for Car Marketplace",
            url: "https://github.com/codemanxdev/carmarketplace-config",
            stargazerCount: 1,
            forkCount: 2,
            primaryLanguage: null,
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 124,
                },
              },
            },
          },
          {
            name: "carmarketplace-car-info-svc",
            description:
              "This micro service provides information for car make brands and models. Get information on all the makes, models, and types of cars, also filter them by make and type.",
            url: "https://github.com/codemanxdev/carmarketplace-car-info-svc",
            stargazerCount: 6,
            forkCount: 7,
            primaryLanguage: {
              name: "Java",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 191,
                },
              },
            },
          },
          {
            name: "carmarketplace-car-listing-svc",
            description:
              "This service provides listing of cars and the CRUD operations to add, remove, modify cars.",
            url: "https://github.com/codemanxdev/carmarketplace-car-listing-svc",
            stargazerCount: 1,
            forkCount: 0,
            primaryLanguage: {
              name: "Java",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 57,
                },
              },
            },
          },
          {
            name: "carmarketplace-config-server",
            description:
              "This service provides centralized spring cloud config server for carmarketplace app.",
            url: "https://github.com/codemanxdev/carmarketplace-config-server",
            stargazerCount: 1,
            forkCount: 2,
            primaryLanguage: {
              name: "Shell",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 55,
                },
              },
            },
          },
          {
            name: "carmarketplace-discovery-server",
            description: "This is the spring boot discovery server for the carmarketplace app.",
            url: "https://github.com/codemanxdev/carmarketplace-discovery-server",
            stargazerCount: 1,
            forkCount: 0,
            primaryLanguage: {
              name: "Java",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 41,
                },
              },
            },
          },
          {
            name: "carmarketplace-apigateway",
            description:
              "Car Marketplace Api Gateway: This service provides an entry point for UI to interface with all APIs.",
            url: "https://github.com/codemanxdev/carmarketplace-apigateway",
            stargazerCount: 9,
            forkCount: 16,
            primaryLanguage: {
              name: "Java",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 75,
                },
              },
            },
          },
          {
            name: "carmarketplace-imgstore-svc",
            description: "This service provides the facility to store the car gallery images.",
            url: "https://github.com/codemanxdev/carmarketplace-imgstore-svc",
            stargazerCount: 1,
            forkCount: 0,
            primaryLanguage: {
              name: "Java",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 13,
                },
              },
            },
          },
          {
            name: "robot-test",
            description: null,
            url: "https://github.com/codemanxdev/robot-test",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "Python",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 11,
                },
              },
            },
          },
          {
            name: "carmarketplace-user-svc",
            description: "This service provides user authentication and registration api endpoints",
            url: "https://github.com/codemanxdev/carmarketplace-user-svc",
            stargazerCount: 2,
            forkCount: 0,
            primaryLanguage: {
              name: "Java",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 71,
                },
              },
            },
          },
          {
            name: "aws-lambda-passwdgenerator",
            description:
              "This is a simple implementation of a random password generator using AWS Lambda",
            url: "https://github.com/codemanxdev/aws-lambda-passwdgenerator",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "Python",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 8,
                },
              },
            },
          },
          {
            name: "carmarketplace-ui",
            description: null,
            url: "https://github.com/codemanxdev/carmarketplace-ui",
            stargazerCount: 1,
            forkCount: 0,
            primaryLanguage: {
              name: "CSS",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 77,
                },
              },
            },
          },
          {
            name: "spring-ai-assistant",
            description: null,
            url: "https://github.com/codemanxdev/spring-ai-assistant",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "Java",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 1,
                },
              },
            },
          },
          {
            name: "insomnia",
            description: null,
            url: "https://github.com/codemanxdev/insomnia",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: null,
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 4,
                },
              },
            },
          },
          {
            name: "karate-demo",
            description: null,
            url: "https://github.com/codemanxdev/karate-demo",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "Gherkin",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 2,
                },
              },
            },
          },
          {
            name: "machinelearning-llm-demo",
            description: null,
            url: "https://github.com/codemanxdev/machinelearning-llm-demo",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "Jupyter Notebook",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 4,
                },
              },
            },
          },
          {
            name: "terraform-azure",
            description: null,
            url: "https://github.com/codemanxdev/terraform-azure",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "HCL",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 7,
                },
              },
            },
          },
          {
            name: "dynamodb-lambda-crudapi",
            description: "Dynamo DB Lambda CRUD API",
            url: "https://github.com/codemanxdev/dynamodb-lambda-crudapi",
            stargazerCount: 1,
            forkCount: 0,
            primaryLanguage: {
              name: "JavaScript",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 21,
                },
              },
            },
          },
          {
            name: "carmarketplace-k8s",
            description: null,
            url: "https://github.com/codemanxdev/carmarketplace-k8s",
            stargazerCount: 1,
            forkCount: 0,
            primaryLanguage: {
              name: "Shell",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 47,
                },
              },
            },
          },
          {
            name: "carmarketplace-db",
            description: "Car Marketplace DB",
            url: "https://github.com/codemanxdev/carmarketplace-db",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: null,
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 12,
                },
              },
            },
          },
          {
            name: "carmarketplace-notification-svc",
            description:
              "Car Marketplace notification Service for sending emails or message notifications",
            url: "https://github.com/codemanxdev/carmarketplace-notification-svc",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "Java",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 5,
                },
              },
            },
          },
          {
            name: "azure-passwdgenerator-func",
            description: null,
            url: "https://github.com/codemanxdev/azure-passwdgenerator-func",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "C#",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 11,
                },
              },
            },
          },
          {
            name: "azure-helloworld-func",
            description: null,
            url: "https://github.com/codemanxdev/azure-helloworld-func",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "C#",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 4,
                },
              },
            },
          },
          {
            name: "azure-passwdgenerator-pipeline",
            description: null,
            url: "https://github.com/codemanxdev/azure-passwdgenerator-pipeline",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "Bicep",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 7,
                },
              },
            },
          },
          {
            name: "tasker",
            description: ".NET CRUD API",
            url: "https://github.com/codemanxdev/tasker",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "C#",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 59,
                },
              },
            },
          },
          {
            name: "tasker-pipeline",
            description: "Cloud Pipeline for Tasker",
            url: "https://github.com/codemanxdev/tasker-pipeline",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "HCL",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 58,
                },
              },
            },
          },
          {
            name: "vite-project",
            description: null,
            url: "https://github.com/codemanxdev/vite-project",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "TypeScript",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 5,
                },
              },
            },
          },
          {
            name: "graphqldemo",
            description: null,
            url: "https://github.com/codemanxdev/graphqldemo",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "C#",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 2,
                },
              },
            },
          },
          {
            name: "todoapp",
            description: null,
            url: "https://github.com/codemanxdev/todoapp",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "JavaScript",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 2,
                },
              },
            },
          },
          {
            name: "my-react-app",
            description: null,
            url: "https://github.com/codemanxdev/my-react-app",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "TypeScript",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 4,
                },
              },
            },
          },
          {
            name: "rocket-launcher",
            description: null,
            url: "https://github.com/codemanxdev/rocket-launcher",
            stargazerCount: 0,
            forkCount: 0,
            primaryLanguage: {
              name: "Kotlin",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 2,
                },
              },
            },
          },
          {
            name: "gops",
            description: "Git Ops - Visual Git Toolkit VS Code Extension",
            url: "https://github.com/codemanxdev/gops",
            stargazerCount: 1,
            forkCount: 0,
            primaryLanguage: {
              name: "TypeScript",
            },
            defaultBranchRef: {
              target: {
                history: {
                  totalCount: 24,
                },
              },
            },
          },
        ],
      },
      contributionsCollection: {
        totalCommitContributions: 12,
        totalPullRequestContributions: 18,
        totalIssueContributions: 0,
      },
    },
  },
};

export interface GitHubRepoStats {
  name: string;
  description: string | null;
  url: string;
  stargazers: number;
  forks: number;
  primaryLanguage: string | null;
  totalCommits: number;
}

export interface GitHubStats {
  login: string;
  name: string | null;
  bio: string | null;
  followers: number;
  totalRepos: number;
  contributions: {
    commits: number;
    pullRequests: number;
    issues: number;
  };
  totalCommits: number;
  repositories: GitHubRepoStats[];
}

interface GraphQLResponse {
  data?: {
    user: {
      login: string;
      name: string | null;
      bio: string | null;
      followers: { totalCount: number };
      repositories: {
        totalCount: number;
        nodes: {
          name: string;
          description: string | null;
          url: string;
          stargazerCount: number;
          forkCount: number;
          primaryLanguage: { name: string } | null;
          defaultBranchRef?: {
            target: {
              history: { totalCount: number };
            };
          };
        }[];
      };
      contributionsCollection: {
        totalCommitContributions: number;
        totalPullRequestContributions: number;
        totalIssueContributions: number;
      };
    };
  };
  errors?: { message: string }[];
}

export const fetchGitHubStats = async (): Promise<GitHubStats> => {
  const query = `
    query ($username: String!) {
      user(login: $username) {
        login
        name
        bio
        followers { totalCount }
        repositories(first: 100, ownerAffiliations: OWNER, isFork: false) {
          totalCount
          nodes {
            name
            description
            url
            stargazerCount
            forkCount
            primaryLanguage { name }
            defaultBranchRef {
              target {
                ... on Commit {
                  history { totalCount }
                }
              }
            }
          }
        }
        contributionsCollection {
          totalCommitContributions
          totalPullRequestContributions
          totalIssueContributions
        }
      }
    }
  `;

  // const response = await fetch("https://api.github.com/graphql", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${token}`,
  //   },
  //   body: JSON.stringify({
  //     query,
  //     variables: { username },
  //   }),
  // });


  // if (!response.ok) {
  //   throw new Error(await response.text());
  // }

  // const json: unknown = await response.json();

  // if (!isGraphQLResponse(json)) {
  //   throw new Error("Invalid response format");
  // }

  // const result: GraphQLResponse = json;

  // if (result.errors && result.errors.length > 0 && result.errors[0].message) {
  //   throw new Error(result.errors[0].message);
  // }

  const result: GraphQLResponse = payload;

  if (!result.data) {
    throw new Error("No data returned");
  }

  const user = result.data.user;

  const totalCommits = user.repositories.nodes.reduce(
    (sum, repo) => sum + (repo.defaultBranchRef?.target.history.totalCount ?? 0),
    0,
  );

  return {
    followers: user.followers.totalCount,
    totalRepos: user.repositories.totalCount,
    contributions: {
      commits: user.contributionsCollection.totalCommitContributions,
      pullRequests: user.contributionsCollection.totalPullRequestContributions,
      issues: user.contributionsCollection.totalIssueContributions,
    },
    login: user.login,
    name: user.name,
    bio: user.bio,
    totalCommits,
    repositories: user.repositories.nodes.map((repo) => ({
      name: repo.name,
      description: repo.description,
      url: repo.url,
      stargazers: repo.stargazerCount,
      forks: repo.forkCount,
      primaryLanguage: repo.primaryLanguage?.name ?? null,
      totalCommits: repo.defaultBranchRef?.target.history.totalCount ?? 0,
    })),
  };
};

function isGraphQLResponse(obj: unknown): obj is GraphQLResponse {
  return typeof obj === "object" && obj !== null && ("data" in obj || "errors" in obj);
}
