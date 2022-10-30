
    })
})

app.post('', (req, res) => {
    const insertedAge = insertAge(34);
    res.json({
        data: insertedAge
    })
})