import React, {useEffect, useState} from "react";
import {packsAPI, PackType} from "../p-3-dal/packsAPI";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../s-1-main/m-2-bll/store";
import {setPacks} from "../p-2-bll/b-2-redux/packsReducer";
import styled from "styled-components";
import InputAdornment from "@mui/material/InputAdornment";
import {
    Button, Pagination,
    TextField
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ImportExportIcon from "@mui/icons-material/ImportExport";


type PacksPropsType = {}
const Packs: React.FC<PacksPropsType> = () => {
    const packs = useSelector<IAppStore, PackType>(state => state.packs)
    const dispatch = useDispatch()
    const [packName, setPackName] = useState("")


    useEffect(() => {
        packsAPI.getPacks()
            .then(res => {
                console.log(res)
                dispatch(setPacks(res.data))
            })
    }, [])


    const addNewPack = () => {
        packsAPI.addPack(packName)
            .then(res => {
                packsAPI.getPacks()
                    .then(res => {
                        console.log(res)
                        dispatch(setPacks(res.data))
                    })
            })
    }

    const deletePack = (id: string) => {
        packsAPI.deletePack(id)
            .then(res => {
                packsAPI.getPacks()
                    .then(res => {
                        console.log(res)
                        dispatch(setPacks(res.data))
                    })
            })
    }
    const sortPacksByDate = () => {
        packsAPI.getPacks({page: 1, sortPacks: "0cardsCount",})
            .then(res => {
                console.log(res)
                dispatch(setPacks(res.data))
            })
    }
    return (
        <PacksStyled>
            <div className={"left-content-wrapper"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio exercitationem fugiat, fugit
                molestias officia quod repellat! Accusamus aliquam aliquid dolores enim esse ex exercitationem facere
                illum incidunt iure laborum libero maxime, nisi non qui quisquam tempora tenetur veniam voluptas
                voluptatum? Accusantium commodi consequatur dicta eos esse, eum ex id illum inventore ipsam iusto
                laborum molestias natus nemo nulla odio placeat quis quisquam, reiciendis repudiandae. Alias aliquid
                architecto aspernatur atque beatae commodi dolorum ducimus eius esse, itaque iure laudantium praesentium
                quibusdam repellat repudiandae sed sint ut vel vitae voluptate! Cumque esse fugiat laboriosam. In labore
                magnam officiis porro repellat tempore voluptate.
            </div>
            <div className={"right-content-wrapper"}>
                <h2>Packs List</h2>
                <div className={"forms"}>
                    <div className={"add-new-pack-form"}>
                        <TextField type="text" value={packName}
                                   onChange={(e) => setPackName(e.currentTarget.value)}
                                   variant={"outlined"}
                                   size={"small"}
                                   InputProps={{
                                       startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>
                                   }}
                        />
                        <Button onClick={addNewPack} variant={"outlined"} size={"small"}>search</Button>
                    </div>
                    <div className={"search-pack-form"}>
                        <TextField type="text" value={packName}
                                   onChange={(e) => setPackName(e.currentTarget.value)}
                                   variant={"outlined"}
                                   size={"small"}
                                   color={"secondary"}
                        />
                        <Button onClick={addNewPack} variant={"outlined"} size={"small"} color={"secondary"}>add new
                            pack</Button>
                    </div>
                </div>
                <div className={"packs"}>
                    <div className={"columns"}>
                        <div>Name</div>
                        <div>Cards</div>
                        <div className={"updated-sort"}>
                            <button className={"updated-btn"}>Last Updates <ImportExportIcon fontSize={"small"}/>
                            </button>

                            <div className={"select-sort"}>
                                <button onClick={sortPacksByDate}>сортировать по дате добавления</button>
                                <div>hello</div>
                                <div>hello</div>
                                <div>hello</div>
                            </div>
                        </div>
                        <div>Created by</div>
                        <div>Actions</div>
                    </div>
                    {packs.cardPacks.map((e, i) => <div className={`pack ${i % 2 !== 0 ? "pack-bg" : ""}`}>
                        <div>{e.name}</div>
                        <div>{e.cardsCount}</div>
                        <div>{e.updated.slice(0, 10).replace(/-/g, ".")}</div>
                        <div className={"user-name"}>{e.user_name}</div>
                        <div className={"buttons"}>
                            <Button variant={"contained"} size={"small"}
                                    sx={{
                                        padding: "0 5px",
                                        minWidth: "50px",
                                        textTransform: "lowercase"
                                    }}
                                    color={"error"}
                                    onClick={() => deletePack(e._id)}
                            >delete</Button>
                            <Button variant={"contained"} size={"small"}
                                    sx={{padding: "0 5px", minWidth: "50px", textTransform: "lowercase"}}
                            >edit</Button>
                            <Button variant={"contained"} size={"small"}
                                    sx={{padding: "0 5px", minWidth: "50px", textTransform: "lowercase"}}
                                    color={"success"}
                            >learn</Button>
                        </div>
                    </div>)}
                </div>
                <Pagination count={100}/>
            </div>
        </PacksStyled>
    )
};


const PacksStyled = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #E6D4DE 0%, #9890C7 100%);
  display: flex;

  .left-content-wrapper {
    background: #D9D9F1;
    width: 243px;
    flex-shrink: 0;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
  }

  .right-content-wrapper {
    padding: 10px;
    background: white;
    //height: 50%;
    width: 100%;
    overflow: scroll;

    .forms {
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 20px;

      input {
        box-shadow: none;
        min-width: 250px;
      }

      .add-new-pack-form {
        display: flex;
        gap: 10px;
      }

      .search-pack-form {
        display: flex;
        gap: 10px;
      }
    }

    .packs {
      border: 2px solid black;

      .columns {
        display: grid;
        grid-template-columns: 200px 100px repeat(3, 1fr);
        align-items: center;
        gap: 25px;
        border-bottom: 2px solid black;
        text-transform: uppercase;
        font-weight: bold;
        background-color: #ECECF9;
        padding: 16px 24px;

        .updated-sort {
          position: relative;

          .updated-btn {
            display: flex;
            gap: 5px;

            &:hover {
              opacity: 0.6;
            }
          }

          .select-sort {
            position: absolute;
            top: 20px;
            left: 0;
            background-color: #e4ffe4;
            padding: 10px;
            border-radius: 5px;
          }
        }
      }

      .pack {
        display: grid;
        grid-template-columns: 200px 100px repeat(3, 1fr);
        gap: 25px;
        padding: 16px 24px;

        &:not(:last-child) {
          border-bottom: 2px solid black;
        }

        .user-name {
          word-wrap: break-word;
        }

        .buttons {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 25px;
        }
      }

      .pack-bg {
        background: #e6e0ff;
      }
    }
  }
`

export default Packs;
