import users from "../models/users.models.js"

export const getAllUsers = async (req, res) => {
    const { role, page = 1, limit = 5 } = req.query;

    let allUsers = [...users];

    if( role ) {
          allUsers = allUsers.filter(user => user.role.toLowerCase() === role.toLowerCase());
    }

    const pageNum = Number.parseInt(page);
    const limitNum = Number.parseInt(limit);

    const startIndex = (pageNum - 1) * limitNum;
    const endIndex = pageNum * limitNum;

    const paginatedResult = allUsers.splice(startIndex, endIndex);

    res.status(200).json({
          success: true,
          meta: {
                  totalRecord: allUsers.length,
                  curentPage: pageNum,
                  totalPags: Math.ceil(allUsers.length / limitNum),
                },
          data: paginatedResult
        })
}
