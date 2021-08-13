import { MemberModel } from "../models/MemberModel.js";
import jwt from 'jsonwebtoken';

class Member {

    index(req, res) {
        // try {
        //     const member = await MemberModel.find()
        //     res.status(200).json(member);
        // } catch (error) {
        //     res.status(500).json(error)
        // }

        MemberModel.find()
        .then( data => {
            res.json(data)
        }).catch( err =>
            {res.status(500).json('loi sever')}
        )
    }

    findone(req, res) {
        const id = req.params.id;
        MemberModel.findOne({
            _id: id
        }).then((data) => {
            res.status(200).json(data)
        }).catch(err =>
            {res.status(500).json('loi sever')}     
        )
    }

    async createMember(req, res) {
        try {
            const newMember = {
                name: 'Thang2',
                scores: 18
            };
            const member = MemberModel(newMember);
            await member.save()

            res.status(200).json(member)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async updateMember(req, res) {
         try {
            const id = req.params.id
            const {newContribute} = req.body

            const master = await MemberModel.findById(id)

            const member = await MemberModel.findOneAndUpdate(
                {_id: id},
                {
                    contribute: master.contribute + newContribute
                },
                { new: true},
            )

            // MemberModel.findOne({_id: id})
            //     .then(data => {
            //         MemberModel.findOneAndUpdate(
            //             {_id: id},
            //             req.body.,
            //             {new: true}
            //             )
            //             .then(data => {
            //                 res.status(200).json(data)
            //             })
            //         })
            //     .catch(error => {res.status(500).json(error)})

            res.status(200).json(member)
        } catch (error) {
            res.status(502).json(error)
        }
    }

    async login(req, res) {
        const username = req.body.username;
        const pass = req.body.pass;

        try {
            await MemberModel.findOne({
                username: username,
                pass: pass
            })
            .then((data) => {
                if(data){
                    const token = jwt.sign({ _id: data._id} , 'mk');
                    res.json({
                        messenge: 'thanh cong',
                        token: token
                    })
                }else{
                    res.json('Dang nhap that bai')
                }
            })
        } catch (error) {
            res.json(error)
        }
    }
}

export default new Member;
